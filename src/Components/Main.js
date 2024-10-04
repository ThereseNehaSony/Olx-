import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Menubar from './Menubar'
import Home from './Home'
import Footer from './Footer'

const Main = () => {
    const [products,setProducts] = useState([])
    const getProducts =()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }
    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div>
      <Navbar />
      <Menubar />
      <Home products={products} />
      <Footer />
    </div>
  )
}

export default Main
