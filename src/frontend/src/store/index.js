import Vue from "vue";
import Vuex from "vuex";
import product from "@/store/modules/product";
import report from "@/store/modules/report";

/**
 * Store management
 * there are defined two modules
 * product module related to products
 * report module related to change in stock of product
 *
 * @author Shahrokh elmi
 */



Vue.use(Vuex);
export default new Vuex.Store({
  modules: { product, report },
});
