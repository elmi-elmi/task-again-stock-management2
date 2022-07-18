<template>
  <div class="product">
    <ProductsTable></ProductsTable>
  </div>
</template>

<script>
import ProductsTable from "@/components/table/ProductsTable";

/**
 * Product Vie
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

</style>
