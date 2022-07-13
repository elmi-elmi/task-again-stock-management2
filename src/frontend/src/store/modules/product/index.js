
import mutations from "@/store/modules/product/mutations";
import actions from "@/store/modules/product/actions";
import getters from "@/store/modules/product/getters";

const products = JSON.parse(localStorage.getItem('products')) || []

export default {
    namespaced: true,
    state: {
        products,
    },
    mutations,
    actions,
    getters
}
