<template>
  <v-card  flat class="pa-4 detailsCard" :key="product.id">
    <v-row>
      <v-card-title class="primary--text">{{ product.name }}</v-card-title>
      <v-spacer></v-spacer>
      <v-card-subtitle class="grey--text">{{ product.id }}</v-card-subtitle>
    </v-row>
    <v-card-text>{{ product.stock }}</v-card-text>
    <v-row class="pa-4">
      <span class="grey--text ">Reservations:&nbsp</span>
      <span v-for="r in product.reservations">{{ r.amount }},</span>
    </v-row>
  </v-card>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ProductDetailsCard",
  computed: {

    ...mapState('product', {
      product: state => state.product
    })
  },
}
</script>

<style scoped>
.detailsCard{
  background: inherit;
}
</style>
