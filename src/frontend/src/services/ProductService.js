import axios from "axios";
/**
 * product services
 * @author Shahrokh elmi
 */

/*=======================================================
    API CALL WITH AXIOS
 =======================================================*/
const api = axios.create({
    baseURL: "http://localhost:8080/api",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default {
    /*=======================================================
        GET REQUESTS (/product/)
     =======================================================*/

    /**
     * GET request
     * $ curl -s -i -w "\n" -X GET localhost:8080/api/product
     * fetch all products
     *
     * @return promise contain response
     */
    getProducts() {
        return api.get("/product");
    },

    /**
     *  GET request
     *  $ curl -s -i -w "\n" -X GET localhost:8080/api/product/1
     * fetch product by id
     *
     * @param id id of product
     * @return promise contain response
     */
    getProductById(id) {
        return api.get(`/product/${id}`);
    },

    /**
     *  GET request
     *  $ curl -s -i -w "\n" -X GET localhost:8080/api/product/1/stock
     *  fetch stock of product
     *
     *  @param id id of product
     *  @return promise contain response
     */
    getStockById(id) {
        return api.get(`/product/${id}/stock`, 13);
    },

    /*=======================================================
       PUT REQUESTS (/product/)
      =======================================================*/
    /**
     *  PUT request
     *  $ curl -s -i -w "\n" -X PUT localhost:8080/api/product/1/refill?amount=5
     *  increase stock amount
     *
     *  @param id id of product
     *  @param amount the amount requested added to product
     *  @return promise contain response
     */
    putRefillProduct(id, amount) {
        return api.put(`/product/${id}/refill?amount=${amount}`);
    },

    /**
     *  PUT request
     *  $ curl -s -i -w "\n" -X PUT localhost:8080/api/product/1/buy?amount=3
     *  decrease stock amount
     *
     *  @param id id of product
     *  @param amount the amount requested decrease from product
     *  @return promise contain response
     */
    putDecreaseProduct(id, amount) {
        return api.put(`/product/${id}/buy?amount=${amount}`);
    },

    /**
     *  PUT request
     *  $ curl -s -i -w "\n" -X PUT localhost:8080/api/product/1/buy?amount=3
     *  reserve product
     *
     *  @param amount the amount requested to reserve
     *  @param id product id
     *  @return promise contain response
     */

    putReserveProduct(id, amount) {
        return api.put(`/product/${id}/reserve?amount=${amount}`)
    },

    /*=======================================================
      PATCH REQUESTS (/update/)
     =======================================================*/
    /**
     *  PATCH request
     *  $ curl -s -i -w "\n" -X PUT localhost:8080/api/product/update
     *  update product
     *
     *  @param product product selected to update
     *  @return promise contain response
     */
    patchProduct(product) {
        return api.patch('/product/update', product)
    }
};
