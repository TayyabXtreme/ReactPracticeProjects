import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Product from './pages/product'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>

    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="" element={<Product />} />

    </Routes>
    </div>
  )
}

export default App