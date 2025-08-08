import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name:"cart",
  initialState: {items:[]},
  reducers: {
    addToCart: (state,action)=>{
      const {name, image, cost} = action.payload
      const item = state.items.find(item=>item.name==name)
      if (item) return
      state.items.push({name:name,image:image,cost:cost,quantity:1})
    },
    updateQuantity: (state,action)=>{
      const {name,quantity} = action.payload
      if (quantity < 1) return
      const item = state.items.find(item=>item.name==name)
      if (item) item.quantity = quantity
    },
    removeFromCart: (state,action)=>{
      const {name} = action.payload
      state.items = state.items.filter((item)=>item.name!=name)
    }
  }
})

export const {addToCart, updateQuantity, removeFromCart} = cartSlice.actions
export default cartSlice.reducer