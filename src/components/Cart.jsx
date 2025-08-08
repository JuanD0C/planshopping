import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../store/cartSlice'
import './Cart.css'
import { toggleCar } from '../store/landingSlice'

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
    <div className='car-container'>
      <h1>Total cart amount: ${totalCost(cartItems)}</h1>
      <div className="carItems-container">
        {cartItems.map((planta,index)=>
        <div key={index} className='itemcard'>
          <img src={planta.image} alt={`imagen de ${planta.name}`} />
          <div className='info'>
            <h3>{planta.name}</h3>
            <p>${planta.cost}</p>
            <div className="controls">
              <button onClick={()=>dispatch(updateQuantity({...planta,quantity:planta.quantity-1}))}>-</button>
              <p>{planta.quantity}</p>
              <button onClick={()=>dispatch(updateQuantity({...planta,quantity:planta.quantity+1}))}>+</button>
            </div>
            <p className='total'>total: ${totalCost([planta])}</p>
            <button onClick={()=>dispatch(removeFromCart(planta))} className='delete'>
              delete
            </button>
          </div>
        </div>)}
      </div>
      <button className='able'>
        Checkout
      </button>
      <button onClick={()=>dispatch(toggleCar(false))} className='able'>
        Continue Shopping
      </button>
    </div>
  )
}

export default Cart