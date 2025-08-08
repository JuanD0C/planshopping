import { useSelector, useDispatch } from 'react-redux'
import { toggleShow } from './store/landingSlice'
import './App.css'
import SectionSelection from './components/SectionSelection'

function App() {
  const show = useSelector((state) => state.land["landing"])
  const dispatch = useDispatch()

  return (
    <>
      <div className={`background ${show ? "invisible" : ""}`}>
        <div className="landing">
          <div className="presentation">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
            <button onClick={() => dispatch(toggleShow())}>
              Start
            </button>
          </div>
          <div className="aboutUs">
            <p className="aboutUs-description">Welcome to Paradise Nursery, where green meets serenity!</p>
            <p className="aboutUs-content">
              At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of
              high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and
              more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every
              plant enthusiast.
            </p>
            <p className="aboutUs-content">
              Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care.
              Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of
              the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your
              home or office.
            </p>

            <p className="aboutUs-content">
              Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the
              beauty of nature right at your doorstep.
            </p>
          </div>
        </div>
      </div>
      <div className={`container-shop ${show ? "" : "invisible"}`}>
        <SectionSelection/>
      </div>
    </>
  )
}

export default App
