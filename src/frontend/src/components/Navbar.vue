<template>
  <nav>
    <v-navigation-drawer v-model="drawer" app color="primary lighten-1">
<!--      nav list comp TODO-->
      <NavDrawer/>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn small block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!--     app bar comp TODO-->

   <ToolbarTitle @click="drawer = !drawer"/>
  </nav>
</template>

<script>
import NavDrawer from "@/components/NavDrawer";
import ToolbarTitle from "@/components/ToolbarTitle";
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
      items: [
        {
          title: "Products",
          icon: "mdi-view-dashboard",
          to: { name: "product", path: "/" },
        },
        // { title: 'Stock', icon: 'mdi-account-box', to:{name:'stock',path:'/'} },
        {
          title: "Reports",
          icon: "mdi-file-chart-outline",
          to: { name: "report", path: "/report" },
        },
      ],
    };
  },
};
</script>

<style scoped></style>
