/**
 * Mutations
 * every mutation on product or products in
 * product modules implement here
 *
 * @author Shahrokh elmi
 */


export default {
  /*=======================================================
                            PRODUCT
     ======================================================= */
  /**
   *
   * save products to state.products
   * @param products All products fetched from backend.
   */
  ADD_PRODUCTS(state,products){
    Object.assign(state.products, products)
  },


  /**
   *
   * added product to store which selected to edit
   * @param product fetched product from backend
   */
  SET_PRODUCT(state, product) {
    state.product = {};
    Object.assign(state.product, product)

    const index = state.products.findIndex(p=>p.id===product.id)
    Object.assign(state.products[index], product)
  },

  /**
   *
   * refill stock in product
   * @param product the product selected to refill stock
   */
  REFILL_PRODUCT(state, product) {
    const index = state.products.findIndex((p) => p.id === product.id);
    Object.assign(state.products[index], product)
  },

  /**
   *
   * decrease stock in product
   * @param product the product selected to decrease stock
   */
  DECREASE_PRODUCT(state, product) {
    const index = state.products.findIndex((p) => p.id === product.id);
    Object.assign(state.products[index], product)
  },


};
