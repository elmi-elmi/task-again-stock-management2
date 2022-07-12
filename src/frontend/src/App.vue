<template>
  <v-app id="inspire">

    <Navbar/>

    <v-main>
      <v-container
          class="py-8 px-6"
          fluid
      >
        <v-row>
          <v-col
              cols="12"
          >
            <v-card>
              <router-view></router-view>
            </v-card>
          </v-col>
        </v-row>

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name:'app',
  components:{Navbar},
  data: () => ({
    cards: ['Today', 'Yesterday'],

  }),
}
</script>
