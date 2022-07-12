<template>
  <div class="product">
    <v-card
        class="pa-0 ma-4"
        :flat="!isFocus"
        rounded
    >
      <v-text-field
          height="40"
          :background-color="backgroundInput"
          rounded
          label="Search Product"
          @focus="focusOnTextField"
          @focusout="unfocusOnTextField"
          hide-details
          class="pa-0"



      >

        <v-icon
            slot="prepend-inner"
            :color="`${isFocus?'teal':'grey'}`"
        >
          mdi-magnify
        </v-icon>
        <v-icon
            @click="showProducts = !showProducts"

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
            v-for="product in products"
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
            <v-card-actions>
              <v-btn
                  small>
                <v-icon left color="success">mdi-plus</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn
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
        {id: 1, name: 'gorme', stock: '121'},
        {id: 2, name: 'gorme', stock: '121'},
        {id: 3, name: 'gorme', stock: '121'},
        {id: 4, name: 'gorme', stock: '121'},
        {id: 5, name: 'gorme', stock: '121'},
        {id: 6, name: 'gorme', stock: '121'},
        {id: 7, name: 'gorme', stock: '121'},
      ],
      backgroundInput:'grey lighten-3'

    }
  },
  methods: {
    focusOnTextField(){
      this.isFocus = true,
      this.backgroundInput = 'white'
    },
    unfocusOnTextField(){
      this.isFocus=false
      this.backgroundInput = 'grey lighten-3'
    }

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
