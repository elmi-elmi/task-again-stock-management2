<template>
<nav>
  <v-navigation-drawer
      v-model="drawer"
      app



  >
    <v-list>
      <v-list-item
          v-for="item in items"
          :key="item.title"
          link

      >
        <v-list-item-icon  >
          <v-icon  >{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title >{{ item.title }}</v-list-item-title>
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
      color=""
      flat
  >
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title dark>
      <span  class="text-uppercase primary--text" >Stock</span>
      <span class="  text-uppercase">management</span>
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
    drawer: true,
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Account', icon: 'mdi-account-box' },
      { title: 'Admin', icon: 'mdi-gavel' },
    ],
  }}
}
</script>

<style scoped>

</style>
