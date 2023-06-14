import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice.js'
import {apiSlice} from './apiSlice.js'

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true
})

export default store