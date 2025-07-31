import React from 'react'
import './SectionPlant.css'
import { useSelector , useDispatch} from 'react-redux'
import { addToCart } from '../store/cartSlice'

const SectionPlant = ({category, plants}) => {
  const cartItems = useSelector((state)=>state.cart.items)
  const dispatch = useDispatch()
  return (
    <>
    <div className='category-header'>SectionPlant {category}</div>
    {plants.map((planta,index)=>
    <div key={index}>
      <p>{planta.name}</p>
      <p>${planta.cost}</p>
      <p>{planta.description}</p>
      {cartItems.find((plantCar)=>planta.name==plantCar.name)?
      <button>added</button>
      :
      <button onClick={()=>dispatch(addToCart(planta))} >add to cart</button>
      }
    </div>
    )}
    </>
  )
}

export default SectionPlant