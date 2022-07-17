import ProductService from "@/services/ProductService";

export default {
    /*=======================================================
          REQUESTS TO BACKEND
       =======================================================*/

    fetchProducts({commit}) {
        return ProductService.getProducts()
            .then(({data}) => commit("ADD_PRODUCTS", data))
    },

    /*
     *  GET request --> to fetch product by ID
     */
    fetchProductById({commit}, productId) {
        return ProductService.getProductById(productId)
            .then(({data}) => {
                commit("SET_PRODUCT", data);
            });
    },

    /*
     *  GET request --> to fetch Stock by ID
     */
    fetchStockById({commit}, stockId) {
        return ProductService.getStockById(stockId)
            .then(({data}) =>
                commit("SET_STOCK", {data, stockId})
            );
    },

    /*
     *  PUT request --> to increase amount of a stock
     */
    // Todo -- Change to 2 separate functions
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

    /*
     *  PUT request --> to decrease amount of a stock
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


    addReserveProduct({commit}, {id, amount}) {
        return ProductService.putReserveProduct(id, amount)
            .then(({data}) => {
                commit('SET_PRODUCT', data)
            })
    },

    updateProduct({commit}, product) {
        return ProductService.patchProduct(product)
            .then(({data}) => {
                commit('SET_PRODUCT', data)
            })
    }
};
