import {configureStore} from '@reduxjs/toolkit'
import reducer from './reducer.js'

export default function makeStore() {
    return configureStore({
        reducer: reducer
    })
}