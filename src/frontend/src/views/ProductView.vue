<template>
   <div class="product">



      <ProductsTable></ProductsTable>
     <div v-if="false">
       <v-card
           class="pa-0 ma-4 mx-auto"
           :flat="!isFocus"
           rounded
           max-width="500"
       >
         <v-text-field
             :background-color="backgroundInput"
             rounded
             label="Search Product"
             @focus="focusOnTextField"
             @focusout="unFocusOnTextField"
             v-model.number.trim.lazy="id"
             @keyup.en.enter="sendRequest(id)"
         >
           <v-icon
               slot="prepend-inner"
               :color="`${isFocus ? 'teal' : 'grey'}`"
           >
             mdi-magnify
           </v-icon>
           <v-icon
               @click="sendRequest"
               slot="append"
               :color="`${isFocus ? 'success' : 'grey'}`"
           >
             mdi-plus
           </v-icon>
         </v-text-field>
       </v-card>
      <v-container v-if="products.length">
         <v-row class="mb-2">
            <v-col
               v-for="(product, index) in products"
               :key="product.id"
               sm="6"
               md="6"
               lg="4"
               cols
               class="d-flex justify-center"
            >
               <v-card max-width="500" min-width="300">
                  <v-btn
                     @click="deleteShowedResult(index)"
                     fab
                     small
                     text
                     class="closeButton"
                  >
                     <v-icon small>mdi-delete-outline</v-icon>
                  </v-btn>
                  <v-card-title class="primary--text">{{
                     product.name
                  }}</v-card-title>
                  <v-card-text>{{ product.stock }}</v-card-text>
                  <v-row justify="center">
                     <v-container>
                        <v-card max-width="200" class="mx-auto" rounded flat>
                           <v-text-field
                              type="number"
                              class="pa-0"
                              background-color="grey lighten-5"
                              label="amount"
                              hide-details
                              v-model="amount"
                           ></v-text-field>
                        </v-card>
                     </v-container>
                     <v-card-actions>
                        <v-btn
                           :disabled="!amount"
                           @click="changeStockValue('refill', product.id)"
                           small
                        >
                           <v-icon left color="success">mdi-plus</v-icon>
                        </v-btn>
                     </v-card-actions>
                     <v-card-actions>
                        <v-btn
                           :disabled="!amount"
                           @click="changeStockValue('decrease', product.id)"
                           small
                        >
                           <v-icon left color="warning">mdi-minus</v-icon>
                        </v-btn>
                     </v-card-actions>
                  </v-row>
               </v-card>
            </v-col>
         </v-row>
      </v-container>
      <div
         @click="focusOnTextField"
         class="productFallback text-overline grey--text text-center"
         v-else
      >
         <v-icon class="teal--text" large>mdi-magnify</v-icon>
         <div>Search Products</div>
      </div>
     </div>
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
