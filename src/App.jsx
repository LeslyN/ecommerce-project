import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './views/Home'

import './assets/sass/main.scss'
import Clothing from './views/Clothing'
import Shoes from './views/Shoes'
import Accesories from './views/Accesories'
import AboutUs from './views/AboutUs'

function App() {
  const [products, setProducts] = useState([])
  const initialUrl = 'https://fakestoreapi.com/products'

  const getProduct = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .then((error) => console.log(error))
  }

  useEffect(() => {
    getProduct(initialUrl)
  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clothing' element={<Clothing />} />
        <Route path='/shoes' element={<Shoes />} />
        <Route
          path='/accesories'
          element={<Accesories products={products} />}
        />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default App
