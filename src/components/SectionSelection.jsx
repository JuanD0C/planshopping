import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleShow } from '../store/landingSlice'
import { categories } from '../store/plantsData'
import SectionPlant from './SectionPlant'
import plants from '../store/plantsData'
import Cart from './Cart'

const SectionSelection = () => {
  const [showCart,setShowCart] = useState(false)
  const itemsCart = useSelector((state)=>state.cart.items)
  const numItems = () => {
    let items = 0
    itemsCart.forEach(element => {
      items+=element.quantity
    });
    items = items == 0 ? "" : items.toString()
    return items
  }
  const dispatch = useDispatch()
  return (
    <>
      <nav className='navbar' style={{backgroundColor: "green"}}>
        <a onClick={() => dispatch(toggleShow())}>
          <div>
            <h3>Paradise Nursery</h3>
            <i>Where Green Meets Serenity</i>
          </div>
        </a>
        <div>
            <a href="#" onClick={() => setShowCart(false)}>Plants</a>
            <a href="#" onClick={() => setShowCart(true)}>carrito {numItems()}</a>
        </div>
      </nav>
      {showCart?
        <Cart/>
      :
        categories.map((category,index)=> 
          <SectionPlant key={index} category={category} plants={plants.filter((planta)=> planta.category.includes(category))}/>
        )
      }
    </>
  )
}
export default SectionSelection