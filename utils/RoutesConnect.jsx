import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Signup from '../src/components/Auth/Signup'
import Login from '../src/components/Auth/Login'
import Home from '../src/components/Home'
import Favourites from '../src/components/Favourites/Favourites'
import Cart from '../src/components/Cart/Cart.jsx'
import Profile from '../src/components/Profile/Profile.jsx'
function RoutesConnect() {
  return (
    <>
    <Routes>
       <Route path='/signup' element={<Signup/>} ></Route>
       <Route path='/' element={<Login/>}></Route>
       <Route path='/home' element={ <Home/> } />
       <Route path='/favourites' element={<Favourites/>}></Route>
       <Route path='/cart' element={<Cart/>}></Route>
       <Route path='/profile' element={<Profile/>} ></Route>
    </Routes>
    </>
  )
}

export default RoutesConnect
