import React from 'react'
import Nav from './Components/Nav/Nav'
import Sub from './Components/Sub/Sub'
import Filter from './Components/Filter/Filter'
import Product from './Components/Product/Product'
import Footer from './Components/Footer/Footer'
const Home = () => {
  return (
    <>
    <Nav/>
    <Sub/>
    <div className='containers'>
      <div className='left'>
      <Filter/>
      </div>
      <div className='right'>
      <Product/>
      </div>

    </div>
 

    <Footer/>

    </>
  )
}

export default Home
