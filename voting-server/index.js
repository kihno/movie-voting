import makeStore from "./src/store.js"
import startServer from "./src/server.js"

export const store = makeStore()
startServer(store)

const data = [
    "Shallow Grave",
    "Trainspotting",
    "A Life Less Ordinary",
    "The Beach",
    "28 Days Later",
    "Millions",
    "Sunshine",
    "Slumdog Millionaire",
    "127 Hours",
    "Trance",
    "Steve Jobs"
]

store.dispatch({
    type: 'SET_ENTRIES',
    entries: data
})
store.dispatch({ type: 'NEXT' })