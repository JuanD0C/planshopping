import React from 'react'
import './SectionPlant.css'

const SectionPlant = ({category, plants}) => {
  return (
    <>
    <div className='category-header'>SectionPlant {category}</div>
    {plants.map((planta,index)=>
    <div key={index}>
      <p>{planta.name}</p>
      <p>{planta.cost}</p>
      <p>{planta.description}</p>
      <button>add to cart</button>
    </div>
    )}
    </>
  )
}

export default SectionPlant