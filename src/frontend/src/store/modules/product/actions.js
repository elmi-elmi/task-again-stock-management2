import ProductService from "@/services/ProductService";

export default {
  /*=======================================================
        REQUESTS TO BACKEND
     =======================================================*/

  fetchProducts({ commit }) {
    return ProductService.getProducts().then(({data})=> commit("ADD_PRODUCTS",data) )
  },

  /*  
   
   *  GET request --> to fetch product by ID
   */
  fetchProductById({ commit }, productId) {
    return ProductService.getProductById(productId).then(({ data }) => {
      commit("ADD_PRODUCT", data);
    });
  },

  /*
   *  GET request --> to fetch Stock by ID
   */
  fetchStockById({ commit }, stockId) {
    return ProductService.getStockById(stockId).then(({ data }) =>
      commit("SET_STOCK", { data, stockId })
    );
  },

  /*
   *  PUT request --> to increase amount of a stock
   */
  // Todo -- Change to 2 separate functions
  addStockAmount(context, { name, id, amount }) {
    // IF GETTING REQUEST FROM PRODUCT ROUTE
    if (name === "product")
      return ProductService.putRefillProduct(id, amount).then(({ data }) => {
        context.commit("REFILL_PRODUCT", data);
        context.dispatch(
          "report/addReport",
          { amount, ...data, status: "refill" },
          { root: true }
        );
      });

    // IF GETTING REQUEST FROM STOCK ROUTE
    return ProductService.putRefillProduct(id, amount).then(({ data }) =>
      commit("REFILL_STOCK", data)
    );
  },

  /*
   *  PUT request --> to decrease amount of a stock
   */
  // Todo -- Change to 2 separate functions
  decreaseStockAmount(context, { name, id, amount }) {
    // IF GETTING REQUEST FROM PRODUCT ROUTE

    if (name === "product")
      return ProductService.putDecreaseProduct(id, amount).then(({ data }) => {
        context.commit("DECREASE_PRODUCT", data);
        context.dispatch(
          "report/addReport",
          { amount, ...data, status: "decrease" },
          { root: true }
        );
      });

    // IF GETTING REQUEST  FROM STOCK ROUTE
    return ProductService.putDecreaseProduct(id, amount).then(({ data }) =>
      commit("DECREASE_STOCK", data)
    );
  },
  deleteProductByIndex({ commit }, index) {
    commit("DELETE_PRODUCT_BY_INDEX", index);
  },
};
