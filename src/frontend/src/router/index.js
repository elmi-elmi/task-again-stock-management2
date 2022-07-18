import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductView from "@/views/ProductView";
import ReportView from "@/views/ReportView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'product',
    component: ProductView
  },
  {
    path:'/report',
    name:'report',
    component:ReportView
  },


]

const router = new VueRouter({
  routes
})

export default router
