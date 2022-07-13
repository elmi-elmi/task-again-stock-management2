export default function saveStatePlugin (store) {
    store.subscribe(
        (mutation, state) => localStorage.setItem('reports', JSON.stringify(state.reports)),
        console.log('lllllllllll')
    )
}
