<template>
   <div class="product">
      <ProductsTable></ProductsTable>



   </div>
</template>

<script>
import ProductsTable from "@/components/ProductsTable";
export default {
   name: "ProductView",
  components: {ProductsTable},

  data() {
      return {
        newProduct:{id:1,name:'shahrokh2'},
         isFocus: false,
         backgroundInput: "grey lighten-3",
         id: null,
         amount: null,
         // rules:[
         //     value=>(typeof value === 'number')||'Id is a number'
         // ]
      };
   },
   computed: {
      products() {
         // return this.$store.getters['product/getProducts']
        return []
      },
   },

   methods: {

      getProducts(){
                  this.$store.dispatch('product/fetchProducts')
      },
      OnTextField() {
         (this.isFocus = true), (this.backgroundInput = "white");
      },
      focusOnTextField() {
         this.isFocus = true;
         this.backgroundInput = "white ";
      },

      unFocusOnTextField() {
         this.isFocus = false;
         this.backgroundInput = "grey lighten-3";
      },

      sendRequest() {
         // which apis has been called -- product/:id or :id/stock
         let ind = this.products?.findIndex((p) => p.id === this.id);
         if (ind >= 0) this.deleteShowedResult(ind);

         const requestToStore =
            this.$route.name === "product"
               ? "product/fetchProductById"
               : "product/fetchStockById";

         this.$store
            .dispatch(requestToStore, this.id)
            .then(() => {
               console.log("here");
               this.id = null;
            }) // if request has been done successfully  the value in input clear
            .catch((e) => {
               // Todo
               console.log(e);
               // Todo -- Check Error status
               // let name = '404Resource'
               // if (e.code === "ERR_NETWORK") name = 'networkError'
               // this.$router.push({name, params: {message: e.message, res: e.response.data}})
            });
      },

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
            }) // clear input
            .catch((e) => {
               // Todo
               console.log(e);
               // let name = '404Resource'
               // // const status = e.response.status
               //
               // Todo -- Check Error status
               // if (e.code === "ERR_NETWORK") name = 'networkError'
               // this.$router.push({name,params:{message:e.message, res:e.response.data}})
            });
      },
      deleteShowedResult(index) {
         //
         this.$store.dispatch("product/deleteProductByIndex", index);
      },
   },
};
</script>

<style scoped>
.closeButton {
   position: absolute;
   top: 0;
   right: 0;
}
.productFallback {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
}
</style>
