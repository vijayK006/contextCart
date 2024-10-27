import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product-details/:id' element={<ProductDetails/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
