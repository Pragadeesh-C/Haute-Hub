import React from 'react'
import Home from './pages/Home'
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Navbar />  
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App