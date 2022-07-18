<template>
  <EditRow v-model="editedItem.name">
    <template #firstButton>
      <v-btn
          class="pa-1"
          small
          outlined
          color="success"
          sm="4" @click="updateName">
        update
      </v-btn>
    </template>
  </EditRow>
</template>

<script>
import EditRow from "@/components/table/dialog/EditRow";
export default {
  name: "UpdateProductRequest",
  components:{EditRow},
  props: {
    editedItem: {
      required: true,
      type: Object
    }
  },
  methods: {
    /**
     * PATCH request to store
     * update product
     *
     */
    updateName() {
      this.$store.dispatch('product/updateProduct', this.editedItem)
          .catch((e) => {
            this.$router.push({name:'404Resource'})
          });
    },
  },
}
</script>

<style scoped>

</style>
