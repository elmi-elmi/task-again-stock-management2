import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductView from "@/views/ProductView";
import ReportView from "@/views/ReportView";
import StockView from "@/views/StockView";

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
  {
    path:'/stock',
    name:'stock',
    component:StockView
  }

]

const router = new VueRouter({
  routes
})

export default router
