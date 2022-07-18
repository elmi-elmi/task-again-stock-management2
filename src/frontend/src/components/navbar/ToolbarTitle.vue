<template>
  <v-app-bar app color="primary lighten-5" dark flat>
    <v-app-bar-nav-icon @click="$emit('click')"></v-app-bar-nav-icon>

    <v-toolbar-title dark>
      <span class="text-uppercase teal text-overline pa-1">Stock</span>
      <span class="text-uppercase text-overline orange pa-1">management</span>
    </v-toolbar-title>

    <v-icon large class="primary--text"> mdi-store-cog-outline</v-icon>

    <v-spacer></v-spacer>

    <v-btn small text>
      <span class="text-overline">log out</span>
      <v-icon small right>mdi-logout</v-icon>
    </v-btn>

  </v-app-bar>
</template>

<script>
/**
 * toolbar added to Navbar
 *
 * @author Shahrokh elmi
 */
export default {
  name: "ToolbarTitle"
}
</script>

<style scoped>

</style>
