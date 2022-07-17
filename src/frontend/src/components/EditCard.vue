<template>
  <v-card>
    <v-card>
      <v-row
          align="center"
          class="pa-1"
      >
        <v-col sm="6">
          <v-text-field
              :background-color="backgroundInput"
              rounded
              label="amount"
              v-model="amount">
          </v-text-field>
        </v-col>
        <v-col sm="6">

          <v-btn

              class="pa-1"
              small
              outlined
              color="success"
              @click="changeStockValue('refill',editedItem.id)">
            Refill
            <v-icon
                right
            >mdi-plus</v-icon>
          </v-btn>

          <v-btn
              class="pa-1 ml-1"
              small
              outlined
              color="warning"
              @click="changeStockValue('decrease',editedItem.id)">
            Decrease
            <v-icon
            right
            >mdi-minus</v-icon>
          </v-btn>
        </v-col>

      </v-row>
    </v-card>

    <v-card>
      <v-row
          align="center"
          class="pa-1"
      >
        <v-col sm="6">
          <v-text-field
              :background-color="backgroundInput"
              rounded
              v-model="reserveValue" label="reserve">

          </v-text-field>
        </v-col>
        <v-col sm="6">
          <v-btn
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
        </v-col>
      </v-row>
    </v-card>
    <v-card>
      <v-row
          align="center"
          class="pa-1"
      >
        <v-col sm="8">
      <v-text-field
          :background-color="backgroundInput"
          rounded
          v-model="editedItem.name"
          label="edit name"
      ></v-text-field>
        </v-col>
        <v-col>
      <v-btn
          class="pa-1"
          small
          outlined
          color="success"
          sm="4" @click="updateName">
        update
      </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: "EditCard",

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
  computed: {
    backgroundInput() {
      return 'grey lighten-3'
    }
  },
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

</style>
