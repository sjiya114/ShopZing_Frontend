import React from 'react'
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
import ProductDisplay from '../Products/ProductDisplay'
import { useContext } from 'react'
import { StoreContext } from '../../context/Context.jsx'
import { useEffect } from 'react'
function Favourites() {
    const {fav,fetchFavData}=useContext(StoreContext);
    useEffect(()=>
    {
     fetchFavData();
    },[])
  return (
    <>
     <Navbar/>
    <h1 style={{fontFamily: 'cursive'}} className="text-center font-extrabold text-4xl px-2 py-6 w-full h-30 bg-red-300 my-6">My Favourites</h1>
    <div className="flex md:flex-row flex-wrap space-y-6 space-x-8  max-md:flex-col mx-4">
      {fav && fav.map((product,index)=>(
     <ProductDisplay key={index} panel={product.panelcolor}  id={product._id} textcolor={product.textcolor} price={product.price}
     name={product.name} image={product.image} bgcolor={product.bgcolor} />
    )) }
    </div> 
    <Footer/>
    </>
  )
}

export default Favourites
