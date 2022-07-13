import Vue from 'vue'
import Vuex from 'vuex'
import product from "@/store/modules/product";
import report from "@/store/modules/report";
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {product, report},
})
