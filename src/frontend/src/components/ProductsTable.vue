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
        <v-toolbar
            flat
        >
          <!--          // TODO  search bar comp.-->
          <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
          ></v-text-field>

          <!--          // TODO dialog comp.-->
          <v-dialog
              v-model="dialog"
              max-width="500px"
          >
            <!--            // TODO edit comp. 111-->
            <EditCard :edited-item="editedItem" :key="editedItem.id"/>

            <v-card>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="close"
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <!--         // TODO dialog comp-->
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:item.actions="{ item,index }">
        <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
            small
            @click="deleteItem(item,index)"
        >
          mdi-delete
        </v-icon>
      </template>

      <template v-slot:item.="props">
        <div>{{ props.item.reservations.length ? 'show' : 'no reserve' }}</div>
      </template>

      <template v-slot:item.data-table-expand="{item,isExpanded, isSelected,expand}">
        <!--        TODO add fallback text, icons name, show and hide text-->
        <ChevronExpand :expand="expand" :is-expanded="isExpanded" :item="item.reservations"/>
      </template>

      <template v-slot:expanded-item="{ headers, item }">
        <reserve-table v-if="item.reservations.length" :headers="headers" :item="item.reservations"/>
      </template>

    </v-data-table>
  </div>
</template>

<script>
import EditCard from "@/components/EditCard";
import ReserveTable from "@/components/ReserveTable";
import ChevronExpand from "@/components/ChevronExpand";

export default {
  name: "ProductsTable",
  components: {EditCard, ReserveTable, ChevronExpand},
  data: () => ({
    search: '',
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'name',
      },
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

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },

  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.$store.dispatch('product/fetchProducts')
          .then(() => {
            this.products = this.$store.getters['product/getProducts']
          })
    },

    editItem(item) {
      this.$store.dispatch('product/fetchProductById', item.id).then(() => {
        this.editedItem = this.$store.state.product.product
      })
      this.dialog = true
    },

    deleteItem(item,i) {
      this.editedIndex = this.products.indexOf(item)
      this.editedItem = item
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.products.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false

    },

    closeDelete() {
      this.dialogDelete = false
    },


  },

}
</script>

<style scoped>

</style>
