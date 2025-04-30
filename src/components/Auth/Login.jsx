import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios'
import { useContext } from 'react';
import { StoreContext } from '../../context/Context';
function Login() {
  const nav=useNavigate();
  const {username,setUsername}=useContext(StoreContext);
  const [user,setUser]=useState({
    email:"",
    password:""
   });
   const onChangeButton=(e)=>
   {
      setUser({...user,[e.target.name]:e.target.value});
   }
   const onSubmitButton=async(e)=>
   {
    e.preventDefault();
     let data={
      email:user.email,password:user.password
     };
     console.log("hello");
     console.log(data);
     try {
      const res=await axios.post("http://localhost:5000/user/login",data);
      console.log("done");
         if(res.data.success){
          let token=res.data.token;
          localStorage.setItem("token",token);
          localStorage.setItem("username",res.data.user);
          setUsername({
            name:res.data.user.name,
            password:res.data.user.password,
            email:res.data.user.email,
            cart:res.data.user.cart,
            favourites:res.data.user.favourites,
            orders:res.data.user.orders,
            Profile:res.data.user.Profile,
            contact:(Number)(res.data.user.contact),
           });
          //  console.log(res.data.user);
                      setUser({
                       email:"",
                       password:""
                      });
                      toast.success(res.data.message)
                      nav("/home");
  
                   }
                   else{
                      toast.error(res.data.message);
                      nav("/signup")
                   }
    } catch (err) {
      console.error("Login failed:", err);
    }
  
   }
  return (
    <>
    <div className="flex justify-center">
<h1 className="text-3xl mt-10 border-2 w-fit px-4 py-2 rounded-md  text-white bg-blue-900 hover:bg-blue-300">Login</h1>
</div>
<form onSubmit={onSubmitButton}  className="max-w-sm mx-auto mt-16 rounded-md  px-4 py-4   bg-black text-white ">
    <div className="mb-5">
      <label htmlFor="email"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input type="email"  onChange={onChangeButton}  name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
    </div>
    <div className="mb-5">
      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
      <input type="password" name="password"  onChange={onChangeButton}   id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    </div>
    <div className="flex items-start mb-5">
      <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
      </div>
      <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
    </div>
    <button type="submit" name="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
     <hr className="white my-6"/>
    <span>Don't have an account?<a href="/signup">&nbsp;Signup</a></span>
    <br/>
    <span>If you are admin?<a href="/owner/login">&nbsp;<b>Admin Access</b></a></span>
  </form>
    </>
  )
}

export default Login
