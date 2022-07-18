<template>
  <EditRow v-model="reserveValue">
    <template #firstButton>
      <v-btn
          :disabled="!reserveValue"
          class="pa-1"
          small
          outlined
          color="success"
          @click="reserveProduct(editedItem.id)"
      >
        reserve
        <v-icon
            right

        >
          mdi-table-plus
        </v-icon>
      </v-btn>
    </template>
  </EditRow>
</template>

<script>
import EditRow from "@/components/table/dialog/EditRow";
export default {
  name: "ReserveProductRequest",
  components:{EditRow},
  data() {
    return {
      reserveValue: null,
    }
  },
  props: {
    editedItem: {
      required: true,
      type: Object
    }
  },
  methods:{
    /**
     * PUT request to store
     * reserve product
     *
     * @param id id of product asked  reserve
     */
    reserveProduct(id) {
      this.$store.dispatch('product/addReserveProduct', {id, amount: this.reserveValue})
          .then(() => this.reserveValue = null)
          .catch((e) => {
            this.$router.push({name:'404Resource'})
          });
    },
  },
  /**
   * after closing the dialog
   * the amounts reset to initial values
   *
   */
  destroyed() {
    this.reserveValue = null;
  }

}
</script>

<style scoped>

</style>
