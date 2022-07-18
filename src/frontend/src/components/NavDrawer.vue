<template>
 <div>
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


 </div>
</template>

<script>
/**
 * drawer of navbar
 * this component added to Navbar
 *
 * @author Shahrokh elmi
 */
export default {
  name: "NavDrawer",
  data(){
    return {
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
    }
  }
}
</script>

<style scoped>

</style>
