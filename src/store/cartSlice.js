import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name:"cart",
  initialState: {},
  reducers: {
    addToCart: (state,action)=>{
      const {name, img, cost} = action.payload
      if (state.has(name)) {
        state.get(name).quantity++
        return
      }
      state.set(name,{img:img,cost:cost, quantity: 1})
    },
    reduceFromCart: (state,action)=>{
      const {name} = action.payload
      if (!state.has(name)) return
      const item = state.get(name)
      item.quantity -= item.quantity == 1 ? 0 : 1
    },
    removeFromCart: (state,action)=>{
      const {name} = action.payload
      if (!state.has(name)) return
      state.remove(name)
    }
  }
})

export const {addToCart, reduceFromCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer