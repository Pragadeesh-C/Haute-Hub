import React from 'react'
import ProductCard from '../components/ProductCard'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='container'>
      <h2>New Products</h2>
      <ProductCard/>
    </div>
  )
}

export default Home