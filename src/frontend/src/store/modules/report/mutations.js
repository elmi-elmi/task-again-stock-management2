
export default  {
    // getProducts: state => state.products,
    ADD_REPORT(state, payload){
        state.reports.unshift(payload)
        // localStorage.setItem('reports', JSON.stringify(state.reports))
    }
}
