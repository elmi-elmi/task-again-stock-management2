<template>
  <v-card flat class="pa-1 editCard">
    <h1 class="grey--text caption pa-2">Edit Product</h1>

    <ProductDetailsCard/>

    <v-divider/>
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

    <EditRow v-model="editedItem.name">
      <template #firstButton>
        <v-btn
            class="pa-1"
            small
            outlined
            color="success"
            sm="4" @click="updateName">
          update
        </v-btn>
      </template>
    </EditRow>


  </v-card>
</template>

<script>
/**
 * the card which show all information of a product
 * also text field and button for edit the product
 * all action are here - update - buy - refill - reserve
 *
 * @author Shahrokh elmi
 */


import ProductDetailsCard from "@/components/table/dialog/ProductDetailsCard";
import EditRow from "@/components/table/dialog/EditRow";

export default {
  name: "EditCard",
  components: {ProductDetailsCard, EditRow},

  data() {
    return {
      amount: null,
      reserveValue: null,
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
            // Todo
            console.log(e);
          });
    },
    reserveProduct(id) {
      this.$store.dispatch('product/addReserveProduct', {id, amount: this.reserveValue})
          .then(() => this.reserveValue = null)

    },
    updateName() {
      this.$store.dispatch('product/updateProduct', this.editedItem)
    },
  },

  destroyed() {
    this.amount = null;
    this.reserveValue = null;
  }

}
</script>

<style scoped>
.editCard {
  background: linear-gradient(to bottom right, #f5f2f0 0, #fff 100%)
}
</style>
