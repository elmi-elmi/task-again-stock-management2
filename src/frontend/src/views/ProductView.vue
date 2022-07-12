<template>
  <div class="product">
    <v-container

    >
      <v-text-field
          background-color="grey lighten-3"
          rounded
          label="Search Product"

      >

        <v-icon
            slot="prepend-inner"
            color="primary"
        >
          mdi-magnify
        </v-icon>
        <v-icon
            @click="showProducts = !showProducts"

            slot="append"
            color="red"
        >
          mdi-plus
        </v-icon>
      </v-text-field>
    </v-container>

    <v-container
        v-if="showProducts"

    >
      <v-row
          class="mb-2"
      >
        <v-col
            v-for="product in products"
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
            <v-card-title class="primary--text">{{ product.name }}</v-card-title>
            <v-card-text>{{ product.stock }}</v-card-text>
            <v-chip>{{ product.id }}</v-chip>
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
      products: [
        {id: 1, name: 'gorme', stock: '121'},
        {id: 2, name: 'gorme', stock: '121'},
        {id: 3, name: 'gorme', stock: '121'},
        {id: 4, name: 'gorme', stock: '121'},
        {id: 5, name: 'gorme', stock: '121'},
        {id: 6, name: 'gorme', stock: '121'},
        {id: 7, name: 'gorme', stock: '121'},
      ]
    }
  },
  methods: {
    show() {
      console.log('who')
    }
  }

}
</script>

<style scoped>

</style>
