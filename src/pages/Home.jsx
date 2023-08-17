import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import '../styles/Home.css'

const Home = () => {
  const [products,setProducts] = useState([]);

  useEffect(()=> {
    fetchProducts();
  },[])

  const fetchProducts = async() => {
    await fetch('http://localhost:3001/api/product',{
      method:"GET",
      headers:{
        Accept:"application/json",
        'Content-type':"application/json"
      }
    }).then((res) => res.json()).then((response) => {
      setProducts(response)
    })
  }

  return (
    <div className='container'>
      <h2>New Products</h2>
      {products.map((item,index) => {
      <ProductCard props={"ads"}/>
      })}
    </div>
  )
}

export default Home