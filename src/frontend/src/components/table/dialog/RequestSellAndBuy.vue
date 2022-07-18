<template>
  <EditRow v-model="amount">
    <template #firstButton>
      <v-btn
          :disabled="!amount"
          class="pa-1"
          small
          outlined
          color="success"
          @click="changeStockValue('refill',editedItem.id)">
        Refill
        <v-icon
            right
        >mdi-plus
        </v-icon>
      </v-btn>
    </template>
    <template #secondButton>
      <v-btn
          :disabled="!amount"
          class="pa-1 ml-1"
          small
          outlined
          color="warning"
          @click="changeStockValue('decrease',editedItem.id)">
        Decrease
        <v-icon
            right
        >mdi-minus
        </v-icon>
      </v-btn>
    </template>
  </EditRow>
</template>

<script>
import EditRow from "@/components/table/dialog/EditRow";

export default {
  name: "SellAndBuyRequest",
  components: {EditRow},

  data() {
    return {
      amount: null,
    }
  },
  props: {
    editedItem: {
      required: true,
      type: Object
    }
  },
  computed: {},
  methods: {

    /**
     * PUT request to store
     * increase stock
     *
     * @param req refill or increase of stock
     * @param id id of product which selected to increase stock
     */
    changeStockValue(req, id) {
      // select which apis should be sent
      const requestToStore =
          req === "refill"
              ? "product/addStockAmount"
              : "product/decreaseStockAmount";
      // send request to store
      this.$store.dispatch(requestToStore, {id, amount: this.amount,})
          .then(() => {
            this.amount = null;
            this.$store.dispatch('product/fetchProductById', this.editedItem.id)
          })
          .catch((e) => {
            this.$router.push({name: '404Resource'})
          });
    },
  },
  /**
   * after closing the dialog
   * the amounts reset to initial values
   *
   */
  destroyed() {
    this.amount = null;
  }
}
</script>

<style scoped>

</style>
