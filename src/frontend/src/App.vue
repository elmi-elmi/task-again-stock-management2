<template>
  <v-app id="inspire">
    <Navbar/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/navbar/Navbar";

/**
 * App.vue of Stock Management
 *
 * @author Shahrokh elmi
 */
export default {
  name: "app",
  components: {Navbar},

};
</script>
