<template>
  <nav>
    <v-navigation-drawer v-model="drawer" app color="primary lighten-1">
<!--      nav list comp TODO-->
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="{ name: item.to.name }"
          exact-active-class="primary lighten-4"
        >
          <v-list-item-icon>
            <v-icon small class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text caption">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn small block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!--     app bar comp TODO-->

    <v-app-bar app color="primary lighten-5" dark flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title dark>
        <span class="text-uppercase teal text-overline pa-1">Stock</span>
        <span class="text-uppercase text-overline orange pa-1">management</span>
      </v-toolbar-title>
      <v-icon large class="primary--text"> mdi-store-cog-outline </v-icon>

      <v-spacer></v-spacer>
      <v-btn small text>
        <span class="text-overline">log out</span>
        <v-icon small right>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
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
