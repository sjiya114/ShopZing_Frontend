import React, { useContext } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Login from './components/Auth/Login'
import RoutesConnect from '../utils/RoutesConnect'
import Signup from './components/Auth/Signup'
import { ToastContainer } from 'react-toastify'
import { useState } from 'react'
import { StoreContext } from './context/Context'
function App() {
  
  return (
   <>
    <RoutesConnect/>
    <ToastContainer/>
   {/* <Signup/>
   <Navbar/> */}
   {/* <Footer/> */}
   </>
  )
}

export default App
