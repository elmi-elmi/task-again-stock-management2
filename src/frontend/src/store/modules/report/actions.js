export default  {
    addReport({commit}, payload){
        console.log('action report',payload)
        commit('ADD_REPORT',payload)
    }
}
