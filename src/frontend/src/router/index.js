import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductView from "@/views/ProductView";
import ReportView from "@/views/ReportView";
import NotFoundView from "@/views/NotFoundView";
import NetworkErrorView from "@/views/NetworkErrorView";

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
  {
    path:'/:catchAll(.*)',
    name:'notFound',
    component: NotFoundView
  },
  {
    path:'/404/:resource',
    name:'404Resource',
    component:NotFoundView,
    props:true
  },
  {
    path:'/500',
    name:'networkError',
    component: NetworkErrorView,
    props:true
  }

]

const router = new VueRouter({
  routes
})

export default router
