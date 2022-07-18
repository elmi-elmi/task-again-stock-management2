<template>
  <v-toolbar
      flat
  >
    <v-text-field
        :value="search"
        @input="updateSearch"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
    ></v-text-field>

    <v-dialog
        @click:outside="$emit('close')"
        :value="dialog"
        max-width="700px"
    >
      <v-card>
        <EditCard :edited-item="editedItem" :key="editedItem.id"/>

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
/**
 * this component related to ProductTable
 * slot:top of table in ProductTable
 * contain dialog and search bar of table
 *
 *
 * @author Shahrokh elmi
 */
import EditCard from "@/components/table/dialog/EditCard";

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
      search: ''
    }
  },
  methods: {
    updateSearch(e) {
      this.$emit('setSearch', e)
    }
  }
}
</script>

<style scoped>

</style>
