<template>
  <v-card flat class="pa-1 editCard">
    <h1 class="grey--text caption pa-2">Edit Product</h1>

    <ProductDetailsCard/>

    <v-divider/>
    <SellAndBuyRequest :edited-item="editedItem"/>

    <ReserveProductRequest :edited-item="editedItem"/>

    <UpdateProductRequest :edited-item="editedItem"/>






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
import SellAndBuyRequest from "@/components/table/dialog/RequestSellAndBuy";
import ReserveProductRequest from "@/components/table/dialog/RequestReserveProduct";
import UpdateProductRequest from "@/components/table/dialog/RequestUpdateProduct";
export default {
  name: "EditCard",
  components: {ProductDetailsCard, EditRow,SellAndBuyRequest, ReserveProductRequest, UpdateProductRequest},


  props: {
    editedItem: {
      required: true,
      type: Object
    }
  },



}
</script>

<style scoped>
.editCard {
  background: linear-gradient(to bottom right, #f5f2f0 0, #fff 100%)
}
</style>
