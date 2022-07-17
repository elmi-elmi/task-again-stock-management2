<template>
<v-card>
  <v-card>
    <v-text-field label="amount" v-model="amount">
    </v-text-field>
    <v-btn @click="changeStockValue('refill',editedItem.id)">Refill</v-btn>
    <v-btn @click="changeStockValue('decrease',editedItem.id)">Decrease</v-btn>
  </v-card>

  <v-card>
    <v-text-field v-model="reserveValue" label="reserve"></v-text-field>
    <v-btn @click="reserveProduct(editedItem.id)">reserve</v-btn>
  </v-card>
  <v-card>
    <v-text-field v-model="editedItem.name" label="edit name"></v-text-field>
    <v-btn @click="updateName">update</v-btn>
  </v-card>
</v-card>
</template>

<script>
export default {
  name: "EditCard",

  data(){return{
    amount:null,
    reserveValue:null,
  }},
  props:{
    editedItem:{
      required:true,
      type:Object
    }
  },
  methods:{
    changeStockValue(req, id) {
      // select which apis should be sent
      const requestToStore =
          req === "refill"
              ? "product/addStockAmount"
              : "product/decreaseStockAmount";
      // send request to store
      this.$store
          .dispatch(requestToStore, {
            name: this.$route.name,
            id,
            amount: this.amount,
          })
          .then(() => {
            this.amount = null;
            this.$store.dispatch('product/fetchProductById', this.editedItem.id)
                .then(() => {
                  this.editedItem = this.$store.state.product.product
                })
          }) // clear input
          .catch((e) => {
            // Todo
            console.log(e);
          });
    },
    reserveProduct(id) {
      console.log(id)
      this.$store.dispatch('product/addReserveProduct', {id, amount: this.reserveValue})
      this.$store.dispatch('product/fetchProductById', this.editedItem.id).then(() => {
        console.log('---')
        this.editedItem = this.$store.state.product.product
        this.reserveValue = null

      })
    },
    updateName() {
      this.$store.dispatch('product/updateProduct', this.editedItem)
    },
  }
}
</script>

<style scoped>

</style>
