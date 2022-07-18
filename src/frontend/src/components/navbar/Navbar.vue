<template>
  <nav>
    <v-navigation-drawer v-model="drawer" app color="primary lighten-1">
      <NavDrawer/>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn small block> Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <ToolbarTitle @click="drawer = !drawer"/>
  </nav>
</template>

<script>
import NavDrawer from "@/components/navbar/NavDrawer";
import ToolbarTitle from "@/components/navbar/ToolbarTitle";

/**
 * navbar
 *
 * @author Shahrokh elmi
 */

export default {
  name: "Navbar",
  components: {ToolbarTitle, NavDrawer},
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style scoped></style>
