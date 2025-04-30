import React from 'react'
import Navbar from './Navbar.jsx';
import Footer from './Footer';
import Products from './Products.jsx';
function Home() {
  return (
    <>
    {/* <Navbar toggle={toggle} setToggle={setToggle} handleToggle={handleToggle} /> */}
    <Navbar/>
    <Products/>
    <Footer/>
    
    </>
  )
}

export default Home
