<template>
  <div class="product pa-5">
    <ProductsTable></ProductsTable>
  </div>
</template>

<script>
import ProductsTable from "@/components/table/ProductsTable";

/**
 * Product View
 * Main page to show table of products
 *
 * @author Shahrokh elmi
 */

export default {
  name: "ProductView",
  components: {ProductsTable},

};
</script>

<style scoped>
.product{
  background: linear-gradient(to bottom right, #f5f2f0 0, #fff 100%)
}
</style>
