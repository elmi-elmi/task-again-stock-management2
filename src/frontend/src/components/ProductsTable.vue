<template>
  <div class="tabel">
    <v-card-title>
      Products
      <v-spacer></v-spacer>
      <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
      ></v-text-field>
    </v-card-title>

    <v-btn @click="refresh">refresh</v-btn>
  <v-data-table
      :headers="headers"
      :items="products"
      sort-by="calories"
      class="elevation-1"
      :loading="!products.length"
      loading-text="Loading... Please wait"
      :search="search"
  >
    <template v-slot:top>
      <v-toolbar
          flat
      >
<!--        <v-divider-->
<!--            class="mx-4"-->
<!--            inset-->
<!--            vertical-->
<!--        ></v-divider>-->
        <v-spacer></v-spacer>
        <v-dialog
            v-model="dialog"
            max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
            >
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-text-field label="amount" v-model="amount">
            </v-text-field>
            <v-btn @click="changeStockValue('refill',editedItem.id)">Refill</v-btn>
            <v-btn @click="changeStockValue('decrease',editedItem.id)">Decrease</v-btn>
          </v-card>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="editedItem.name"
                        label="Product name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="editedItem.stock"
                        label="Stock"
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="editedItem.id"
                        label="id"
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="editedItem.reservations"
                        label="reservations"
                    ></v-text-field>
                  </v-col>

                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item,index }">
      <v-icon
          small
          class="mr-2"
          @click="editItem(item,index)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
          small
          @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
          color="primary"
          @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
  </div>
</template>

<script>
export default {
  name: "ProductsTable",
  data: () => ({
    amount:null,
    search:'',
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Stock', value: 'stock' },
      { text: 'id', value: 'id' },
      { text: 'reservations', value: 'reservations' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    products: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      stock: 0,
      id: 0,
      reservations: 0,
    },
    defaultItem: {
      name: '',
      stock: 0,
      reservations: 0,
      id: 0,
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.$store.dispatch('product/fetchProducts').then(()=>{

      this.products =  this.$store.getters['product/getProducts']
      })
    },

    editItem (item,i) {
      console.log(i)
      this.editedIndex = this.products.indexOf(item)
      // this.editedItem = item
      this.$store.dispatch('product/fetchProductById',item.id).then(()=>{
        console.log('---')
      this.editedItem = this.$store.state.product.product
      })
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.products.indexOf(item)
      this.editedItem = item
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.products.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.products[this.editedIndex], this.editedItem)
      } else {
        this.products.push(this.editedItem)
      }
      this.close()
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
            this.$store.dispatch('product/fetchProductById',this.editedItem.id ).then(()=>{
              console.log('---')
              this.editedItem = this.$store.state.product.product
            })
          }) // clear input
          .catch((e) => {
            // Todo
            console.log(e);
          });
    },
    refresh(){
      this.$store.dispatch('product/fetchProducts').then(()=>{
        this.products = this.$store.state.product.products
      })
    }
  },

}
</script>

<style scoped>

</style>
