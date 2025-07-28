import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
import landReducer from "./landingSlice"


const store = configureStore({
  reducer: {
    cart: cartReducer,
    land: landReducer
  }
})

export default store