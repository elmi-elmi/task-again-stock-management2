import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductView from "@/views/ProductView";
import ReportView from "@/views/ReportView";

/**
 *
 * @author Shahrokh elmi
 */

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
// TODO - errorNetwork route, notFound page and resource route


]

const router = new VueRouter({
  routes
})

export default router
