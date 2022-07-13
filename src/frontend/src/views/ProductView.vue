<template>
  <div class="product">
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
          hide-details
          v-model="id"


      >

        <v-icon
            slot="prepend-inner"
            :color="`${isFocus?'teal':'grey'}`"
        >
          mdi-magnify
        </v-icon>
        <v-icon
            @click="sendRequest"
            slot="append"
            :color="`${isFocus?'success':'grey'}`"
        >
          mdi-plus
        </v-icon>
      </v-text-field>
    </v-card>

    <v-container
        v-if="showProducts"

    >
      <v-row
          class="mb-2"
      >
        <v-col
            v-for="(product,index) in products"
            :key="product.id"
            sm="6"
            md="6"
            lg='4'
            cols
            class="d-flex justify-center "

        >
          <v-card
            max-width="500"
            min-width="300"
          >
            <v-btn fab small text class="closeButton">
              <v-icon  small >mdi-delete-outline</v-icon>
            </v-btn>
            <v-card-title class="primary--text">{{ product.name }}</v-card-title>
            <v-card-text>{{ product.stock }}</v-card-text>
            <v-row
              justify="center"
            >
              <v-container>
                <v-card
                max-width="200"
                class="mx-auto"
                rounded
                flat
                >
                <v-text-field
                    class="pa-0"
                    background-color="grey lighten-5"
                    label="amount"
                    hide-details
                    @input="handel($event, product.id, index)"
                ></v-text-field>

                </v-card>

              </v-container>
            <v-card-actions>
              <v-btn
                  @click="changeStockValue('refill',product.id)"
                  small>
                <v-icon left color="success">mdi-plus</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn
                  @click="changeStockValue('decrease', product.id)"
                  small>
                <v-icon left color="warning">mdi-minus</v-icon>
              </v-btn>
            </v-card-actions>
            </v-row>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>
export default {
  name: "ProductView",
  data() {
    return {
      showProducts: true,
      isFocus:false,
      products: [

      ],
      backgroundInput:'grey lighten-3',
      id:null,
      amount:null,

    }
  },
  methods: {
    handel(e,id, index){
      console.log(e, id, index)
    },
    focusOnTextField(){
      this.isFocus = true,
      this.backgroundInput = 'white'
    },
    unFocusOnTextField(){
      this.isFocus=false
      this.backgroundInput = 'grey lighten-3'
    },

    sendRequest() {
      // which apis has been called -- product/:id or :id/stock
      const requestToStore = this.$route.name === 'product'
          ? 'product/fetchProductById'
          : 'product/fetchStockById'
      console.log(this.id, requestToStore)
      this.$store.dispatch(requestToStore, this.id)
          .then(() => {
            this.id = null;
            this.products = this.$store.getters['product/getProducts']
          }) // if request has been done successfully  the value in input clear
          .catch((e) => {
            // Todo -- Check Error status
            let name = '404Resource'
            if (e.code === "ERR_NETWORK") name = 'networkError'

            this.$router.push({name, params: {message: e.message, res: e.response.data}})
          })

    },

    changeStockValue(req, id) {
      // select which apis should be sent
      const requestToStore = req === 'refill'
          ? 'product/addStockAmount'
          : 'product/decreaseStockAmount'

      // get id
   

      console.log(id)
      // send request to store
      this.$store.dispatch(requestToStore, {name: this.$route.name, id, amount: this.amount})
          .then(() => this.amount = null) // clear input
          .catch((e) => {
            // Todo -- check status error
            let name = '404Resource'
            // const status = e.response.status

            if (e.code === "ERR_NETWORK") name = 'networkError'
            this.$router.push({name,params:{message:e.message, res:e.response.data}})
          })

    },

  }

}
</script>

<style scoped>
.closeButton{
  position: absolute;
  top: 0;
  right: 0;
}


</style>
