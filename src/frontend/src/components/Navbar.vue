<template>
<nav>
  <v-navigation-drawer
      v-model="drawer"
      app
      color="primary lighten-1"


  >
    <v-list>
      <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="{name:item.to.name}"
          exact-active-class="primary lighten-4"
      >
        <v-list-item-icon  >
          <v-icon class="white--text" >{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block>
          Logout
        </v-btn>
      </div>
    </template>

  </v-navigation-drawer>

  <v-app-bar
      app
      color="primary"
      dark
      flat
  >
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title dark>
      <span  class="text-uppercase teal text-overline pa-1 " >Stock</span>
      <span class="  text-uppercase text-overline orange pa-1">management</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn small text >
      <span>log out</span>
      <v-icon right>mdi-logout</v-icon>
    </v-btn>

  </v-app-bar>



</nav>
</template>

<script>
export default {
  name: "Navbar",
  data(){return{
    drawer: false,
    items: [
      { title: 'Product', icon: 'mdi-view-dashboard',to:{name:'product',path:'/'} },
      { title: 'Stock', icon: 'mdi-account-box', to:{name:'stock',path:'/'} },
      { title: 'Report', icon: 'mdi-gavel',to:{name:'report',path:'/report'} },
    ],
  }}
}
</script>

<style scoped>

</style>
