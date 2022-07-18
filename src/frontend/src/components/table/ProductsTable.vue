<template>
  <div class="table">
    <v-data-table
        :headers="headers"
        :items="products"
        sort-by="calories"
        class="elevation-1"
        :loading="!products.length"
        loading-text="Loading... Please wait"
        :search="search"
        show-expand
    >

      <template v-slot:top>
        <TopToolbarTable
            @setSearch="setSearch"
            @close="close"
            :edited-item="editedItem"
            :dialog="dialog"
        />
      </template>

      <template v-slot:item.actions="{ item,index }">
        <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
      </template>

      <template v-slot:item.="props">
        <div>{{ props.item.reservations.length ? 'show' : 'no reserve' }}</div>
      </template>

      <template v-slot:item.data-table-expand="{item,isExpanded, isSelected,expand}">
        <ChevronExpand :expand="expand" :is-expanded="isExpanded" :item="item.reservations"/>
      </template>

      <template v-slot:expanded-item="{ headers, item }">
        <reserve-table v-if="item.reservations.length" :headers="headers" :item="item.reservations"/>
      </template>

    </v-data-table>
  </div>
</template>

<script>
/**
 * this a table in ProductView
 * showed all products which fetched from backend
 *
 *
 * @author Shahrokh elmi
 */
import EditCard from "@/components/table/dialog/EditCard";
import ReserveTable from "@/components/table/reserve/ReserveTable";
import ChevronExpand from "@/components/table/reserve/ChevronExpand";
import TopToolbarTable from "@/components/table/TopToolbarTable";

export default {
  name: "ProductsTable",
  components: {EditCard, ReserveTable, ChevronExpand, TopToolbarTable},
  data: () => ({
    search: '',
    dialog: false,
    dialogDelete: false,
    headers: [
      {text: 'Name', align: 'start', sortable: false, value: 'name',},
      {text: 'Stock', value: 'stock', align: 'start'},
      {text: 'id', value: 'id'},
      {text: 'reservations', value: 'data-table-expand'},
      {text: 'Actions', value: 'actions', sortable: false, align: 'end'},
    ],
    products: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      stock: 0,
      id: 0,
      reservations: 0,
    },

  }),

  watch: {
    dialog(val) {
      val || this.close()
    },
  },

  created() {
    this.initialize()
  },

  methods: {

    setSearch(e) {
      this.search = e
    },

    initialize() {
      this.$store.dispatch('product/fetchProducts')
          .then(() => {
            this.products = this.$store.getters['product/getProducts']
          })
    },

    editItem(item) {
      this.$store.dispatch('product/fetchProductById', item.id)
          .then(() => Object.assign(this.editedItem, this.$store.state.product.product))
      this.dialog = true
    },

    close() {
      this.dialog = false

    },

  },

}
</script>

<style scoped>

</style>
