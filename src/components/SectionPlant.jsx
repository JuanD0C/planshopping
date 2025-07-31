import React from 'react'
import './SectionPlant.css'
import { useSelector , useDispatch} from 'react-redux'
import { addToCart } from '../store/cartSlice'

const SectionPlant = ({category, plants}) => {
  const cartItems = useSelector((state)=>state.cart.items)
  const dispatch = useDispatch()
  return (
    <>
    <div className="section">
      <div className='section-header'>SectionPlant {category}</div>
      <div className='card-container'>
        {plants.map((planta,index)=>
        <div key={index} className='product-card'>
          <h3>{planta.name}</h3>
          <img src={planta.image} alt={`imagen de ${planta.name}`} />
          <p className='cost'>${planta.cost}</p>
          <p>{planta.description}</p>
          {cartItems.find((plantCar)=>planta.name==plantCar.name)?
          <button className='disable'>added</button>
          :
          <button onClick={()=>dispatch(addToCart(planta))} className='able' >add to cart</button>
          }
        </div>
        )}
      </div>
    </div>
    </>
  )
}

export default SectionPlant