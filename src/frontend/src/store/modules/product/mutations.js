export default {
    /*=======================================================
                            PRODUCT
     ======================================================= */
    /*
     *  requested product save in the `state.product`
     */
    ADD_PRODUCT(state, product) {
        state.products.unshift(product)
    },

    /*
     *  update amount of stock in the `state.product`
     */
    REFILL_PRODUCT(state, product) {
        const index = state.products.findIndex(p=>p.id === product.id)
        state.products[index] = product
    },

    DECREASE_PRODUCT(state, product) {
        const index = state.products.findIndex(p=>p.id === product.id)
        state.products[index] = product
    },

    DELETE_PRODUCT(state) {
        state.product = {}
    },

    /*=======================================================
                             STOCK
      ======================================================= */

    /*
     *  requested stock save in the `state.stock`
     */
    SET_STOCK(state, {data, stockId}) {
        state.stock = {value: data, id: stockId}

    },
    /*
     *  update value of stock in the `state.stock`
     */

    REFILL_STOCK(state, product) {
        state.stock = {value: product.stock, id: product.id}
    },

    DECREASE_STOCK(state, product) {
        state.stock = {value: product.stock, id: product.id}
    },

    DELETE_STOCK(state) {
        state.stock = {}
    },


    // Todo => change to UPDATE_PRODUCT Or just update amount
}
