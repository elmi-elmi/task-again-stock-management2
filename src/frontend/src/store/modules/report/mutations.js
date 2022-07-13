
export default  {
    // getProducts: state => state.products,
    ADD_REPORT(state, payload){
        console.log('------',payload)
        state.reports.unshift(payload)

    }
}
