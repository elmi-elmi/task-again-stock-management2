export default {
  /*=======================================================
                            PRODUCT
     ======================================================= */
  ADD_PRODUCTS(state,products){
    // state.products = products
    Object.assign(state.products, products)
  },
  /*
   *  requested product save in the `state.product`
   */
  SET_PRODUCT(state, product) {
    Object.assign(state.product, product)

    const index = state.products.findIndex(p=>p.id===product.id)
    Object.assign(state.products[index], product)
  },

  /*
   *  update amount of stock in the `state.product`
   */
  REFILL_PRODUCT(state, product) {
    const index = state.products.findIndex((p) => p.id === product.id);
    Object.assign(state.products[index], product)
  },

  DECREASE_PRODUCT(state, product) {
    const index = state.products.findIndex((p) => p.id === product.id);
    Object.assign(state.products[index], product)

  },


};
