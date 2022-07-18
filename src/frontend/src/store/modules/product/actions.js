import ProductService from "@/services/ProductService";

/**
 * Actions
 * every action on product or products in
 * product modules implement here
 *
 * @author Shahrokh elmi
 */



export default {
    /*=======================================================
          REQUESTS TO BACKEND
       =======================================================*/
    /**
     * GET request from services
     * fetch all products from backend
     * then add response to products state
     * @return promise contain response from backend
     */
    fetchProducts({commit}) {
        return ProductService.getProducts()
            .then(({data}) => commit("ADD_PRODUCTS", data))
    },


    /**
     * GET request from services
     * fetch product by id
     * then add response to product state
     *
     * @param productId id of product which selected to edit
     * @return promise contain response from backend
     */

    fetchProductById({commit}, productId) {
        return ProductService.getProductById(productId)
            .then(({data}) => {
                commit("SET_PRODUCT", data);
            });
    },

    /**
     * GET request from services
     * fetch stock of product
     * then mutate product state
     *
     * @param stockId id of product
     * @return promise contain response from backend
     */
    fetchStockById({commit}, stockId) {
        return ProductService.getStockById(stockId)
            .then(({data}) =>
                commit("SET_STOCK", {data, stockId})
            );
    },


    /**
     * PUT request from services
     * increase stock of product
     * then mutate product state
     *
     * @param id id of product which selected to edit
     * @param amount the amount asked to increase
     * @return promise contain response from backend
     */
    addStockAmount(context, {id, amount}) {
        return ProductService.putRefillProduct(id, amount)
            .then(({data}) => {
                context.commit("REFILL_PRODUCT", data)
                return data
            })
            .then((data) => {
                return context.dispatch("report/addReport", {amount, ...data, status: "refill"}, {root: true})
            })
    },

    /**
     * PUT request from services
     * decrease stock of product
     * then mutate product state
     *
     * @param id id of product which selected to edit
     * @param amount the amount asked to increase
     * @return promise contain response from backend
     */
    decreaseStockAmount(context, {id, amount}) {
        return ProductService.putDecreaseProduct(id, amount)
            .then(({data}) => {
                context.commit("DECREASE_PRODUCT", data)
                return data
            })
            .then((data) => {
                return context.dispatch("report/addReport", {amount, ...data, status: "decrease"}, {root: true})
            })


    },
    /**
     * PUT request from services
     * add reserve to product
     * then mutate product state
     *
     * @param id id of product which selected to reserve
     * @param amount the amount asked to reserve
     * @return promise contain response from backend
     */

    addReserveProduct({commit}, {id, amount}) {
        return ProductService.putReserveProduct(id, amount)
            .then(({data}) => {
                commit('SET_PRODUCT', data)
            })
    },

    /**
     * PATCH request from services
     * update product information
     * then mutate product in state
     *
     * @param product the product selected to update
     * @return promise contain response from backend
     */

    updateProduct({commit}, product) {
        return ProductService.patchProduct(product)
            .then(({data}) => {
                commit('SET_PRODUCT', data)
            })
    }
};
