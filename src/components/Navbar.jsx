import React, { useContext } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import 'react-dom'
import { StoreContext } from '../context/Context';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    const {token,setToken,setUsername}=useContext(StoreContext);
    const [toggle,setToggle]=useState(false);
  const handleToggle=()=>
    {
        if(toggle)
        {
        setToggle(!toggle);
        document.body.style.backgroundColor='black';
        document.body.style.color='white';
        }
        else{
        setToggle(!toggle);
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
        }
    }
    const nav=useNavigate();
    const logout=()=>
    {
        localStorage.clear("token");
        localStorage.clear("username");
        setUsername("");
        setToken("");
        nav("/");
    }
  return (
    <>
      <div id="navbar" className={`bg-black text-white hidden py-8`}>
        <Link className="hover:bg-slate-700 w-fit mb-3 font-semibold px-8 py-4 rounded-md  text-3xl ">ShopZing</Link>
        <button ><img src="https://cdn-icons-png.flaticon.com/128/18809/18809784.png" className="w-8 h-8"/></button>
        <ul id="menu" className="px-8 hidden">
           <li className="hover:bg-slate-700 w-fit mb-3 rounded-md">  <Link className="px-1">Shop</Link></li>
          <li className="hover:bg-slate-700 w-fit mb-3 rounded-md"><Link to="/user/cart" className="px-1"> Cart</Link></li>
          <li className="hover:bg-slate-700 w-fit mb-3 rounded-md"><Link to="/user/profile" className="px-1">My Account</Link></li>
          <li className="hover:bg-slate-700 w-fit mb-3 rounded-md"> <Link to="/index/logout" className="px-1">Logout</Link></li>
        </ul>
    </div>
    {/* <!-- desktop view --> */}
    <div id="xyz"  className={`bg-black text-white cursor-pointer space-x-6 font-semibold max-md:space-y-1`}>
        <div id="logo" className="hover:bg-slate-700 w-fit mb-3  mx-48 rounded-md  text-3xl " style={{fontFamily:'cursive' }}>
            <Link className="px-1">ShopZing</Link>
        </div>
        <img style={{width:'40px', height: '40px'}} src="https://cdn-icons-png.flaticon.com/128/3081/3081559.png"/>
        <div className="hover:bg-slate-700  w-fit mb-3 rounded-md">
            <Link to='/home' className="px-1">Shop</Link>
        </div>
        <div className="hover:bg-slate-700 w-fit mb-3 rounded-md">
            <Link to="/cart" className="px-1"> Cart</Link>
        </div>
        <div className="hover:bg-slate-700 w-fit mb-3 rounded-md">
            <Link to="/profile" className="px-1">My Account</Link>
        </div>
        <div className="hover:bg-slate-700 w-fit mb-3 rounded-md">
            <button onClick={()=>{logout()}} className="px-1">Logout</button>
        </div>
        <div>
            <Link to="/favourites"><img className="w-12 h-12"
                    src="https://cdn-icons-png.freepik.com/256/15121/15121034.png?ga=GA1.1.1595323845.1741078158&semt=ais_hybrid"
                    alt="nothing"/></Link>
        </div>
        <div>
            <button>
            <img src="https://img.icons8.com/?size=100&id=nNtT9r4dDsaU&format=png&color=000000" alt="abc" onClick={(e)=>{handleToggle()}} className="w-10 h-10"/></button>
        </div>
    </div>
   
    </>
  )
}

export default Navbar
