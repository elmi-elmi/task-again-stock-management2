<template>
  <v-app id="inspire">
    <Navbar/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "app",
  components: {Navbar},
  data: () => ({
    neww: {
      name: 'shshs', stock: '13', id: '1',
      reservations:
          [{
            amount: 1,
            id: 1291,
            pointOfTime: "2022-07-17T11:22:13.004+00:00"
          },
            {
              amount: 3,
              id: 12912,
              pointOfTime: "2022-07-17T11:22:20.004+00:00"
            },
            {
              amount: 2,
              id: 129111,
              pointOfTime: "2022-07-17T11:22:30.004+00:00"
            }]
    }
  }),
  methods:{

  }
};
</script>
