import { Routes, Route, Link } from 'react-router-dom'

import Home from './views/Home'

import './assets/sass/main.scss'
import Clothing from './views/Clothing'
import Shoes from './views/Shoes'
import Accesories from './views/Accesories'
import AboutUs from './views/AboutUs'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clothing' element={<Clothing />} />
        <Route path='/shoes' element={<Shoes />} />
        <Route path='/accesories' element={<Accesories />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default App
