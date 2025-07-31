import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../store/cartSlice'
const Cart = () => {
  const cartItems = useSelector((state)=>state.cart.items)
  const dispatch = useDispatch()
  const totalCost = (plants) =>{
    let total = 0

    plants.forEach((planta)=>{
      total += planta.quantity*planta.cost
    })
    return total
  }
  return (
    <div>Cart
      <p>total cart amount: ${totalCost(cartItems)}</p>
      {cartItems.map((planta,index)=>
      <div key={index}>
        <p>{planta.name}</p>
        <p>${planta.cost}</p>
        <button onClick={()=>dispatch(updateQuantity({...planta,quantity:planta.quantity-1}))}>-</button>
        <p>{planta.quantity}</p>
        <button onClick={()=>dispatch(updateQuantity({...planta,quantity:planta.quantity+1}))}>+</button>
        <p>total: ${totalCost([planta])}</p>
        <button onClick={()=>dispatch(removeFromCart(planta))}>delete</button>
      </div>)}
    </div>
  )
}

export default Cart