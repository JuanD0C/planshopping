import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleShow } from '../store/landingSlice'
import { categories } from '../store/plantsData'
import SectionPlant from './SectionPlant'
import plants from '../store/plantsData'
import Cart from './Cart'
import './SectionSelection.css'
import { toggleCar } from '../store/landingSlice'

const SectionSelection = () => {
  const showCart = useSelector((state)=>state.land["car"])
  const itemsCart = useSelector((state)=>state.cart.items)
  const numItems = () => {
    let items = 0
    itemsCart.forEach(element => {
      items+=element.quantity
    });
    items = items == 0 ? "0" : items.toString()
    return items
  }
  const dispatch = useDispatch()
  return (
    <>
      <nav className='navbar'>
        <a onClick={() => dispatch(toggleShow())} className='backhome'>
            <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="logo" />
            <div>
              <h3>Paradise Nursery</h3>
              <p>Where Green Meets Serenity</p>
            </div>
        </a>
        <div className='navbar-links'>
            <a href="#" onClick={() => dispatch(toggleCar(false))}>Plants</a>
            <a href="#" onClick={() => dispatch(toggleCar(true))} className='carlink'>{numItems()}</a>
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