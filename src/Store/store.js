import { configureStore } from "@reduxjs/toolkit/"
import iterateReducer from './slice'

export default configureStore ({
    reducer: {
      iterate: iterateReducer,
 },
})