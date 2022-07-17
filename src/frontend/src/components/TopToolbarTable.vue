<template>
  <v-toolbar
      flat
  >
    <!--          // TODO  search bar comp.-->
    <v-text-field
        :value="search"
        @input="updateSearch"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
    ></v-text-field>

    <!--          // TODO dialog comp.-->
    <v-dialog
        @click:outside="$emit('close')"
        :value="dialog"
        max-width="700px"

    >
      <!--            // TODO edit comp. 111-->
      <EditCard :edited-item="editedItem" :key="editedItem.id" />

      <v-card>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              class="pa-1"
              small
              outlined
              color="primary darken-1"
              @click="$emit('close')"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


  </v-toolbar>
</template>

<script>
import EditCard from "@/components/EditCard";

export default {
  name: "TopToolbarTable",
  components: {EditCard},
  props: {
    editedItem: {
      required: true,
      type: Object
    },
    dialog: {
      type: Boolean,
      required: true,
    },

  },
  data() {
    return {
      search:''
    }
  },
  methods: {
    updateSearch(e){
      this.$emit('setSearch',e)
    }
  }
}
</script>

<style scoped>

</style>
