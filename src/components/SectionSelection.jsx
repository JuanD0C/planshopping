import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleShow } from '../store/landingSlice'
import { categories } from '../store/plantsData'
import SectionPlant from './SectionPlant'
import plants from '../store/plantsData'

const SectionSelection = () => {
  const show = useSelector((state) => state.land[0])
  const dispatch = useDispatch()
  return (
    <>
      <nav className='navbar' style={{backgroundColor: "green"}}>
        <a href="/" onClick={() => dispatch(toggleShow())}>
          <div>
            <h3>Paradise Nursery</h3>
            <i>Where Green Meets Serenity</i>
          </div>
        </a>
        <div>
            <a href="#" onClick={(e) => handlePlantsClick(e)}>Plants</a>
            <a href="#" onClick={(e) => handleCartClick(e)}>carrito</a>
        </div>
      </nav>
      <div className='main container'>
        {categories.map((category,index)=> (
          <SectionPlant key={index} category={category} plants={plants.filter((planta)=> planta.category.includes(category))}/>
        ))}
      </div>
    </>
  )
}
export default SectionSelection