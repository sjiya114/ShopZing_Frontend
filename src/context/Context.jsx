import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
export const StoreContext=createContext(null);
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
axios.defaults.baseURL="http://localhost:5000";
function StoreContextProvider({children}) {
    const url="http://localhost:5000";
    const [products,setProducts]=useState([]);
    const [token,setToken]=useState(localStorage.getItem("token"));
    const [cart,setCart]=useState([]);
    const [discount,setDiscount]=useState(0);
    const [amount,setAmount]=useState(0);
    const [bill,setBill]=useState(0);
    const [fav,setFav]=useState([]);
    const [username,setUsername]=useState(localStorage.getItem("user"));

   const authUser=async()=>
   {
    const {data}=await axios.get("/auth/user",{ headers:{
            Authorization: `Bearer ${token}`,
          }});
    if(data.success)
    {
      localStorage.setItem("user",data.user);
      setUsername(data.user);
    }
    else
    {
      toast.error("error while logging in");
    }
   }
    const fetchProductList=async()=>
    {
      const {data}=await axios.get("/index/products");
      if(data.success)
      {
        setProducts(data.products);
        // console.log("successfully fetched record");
      }
    }
    const addToCart=async(_id)=>
      {
          const res=await axios.get(`user/addtocart/${_id}`,{ headers:{
            Authorization: `Bearer ${token}`,
          }});
          if(res.data.success)
          {
          toast.success(res.data.message);
         const nav=useNavigate();
          nav('/home');   
          }
      }
      const addToFavourites=async(_id)=>
        {
            const res=await axios.get(`/user/addtofavourites/${_id}`);
            if(res.data.success)
            {
              toast.success("added to favourites successfully");
              const nav=useNavigate();
              nav('/home');   
            }
        }
      const removeFromCart=async(_id)=>
        {
            const res=await axios.get(`/user/removefromcart/${_id}`,{ headers:{
              Authorization: `Bearer ${token}`,
            }});
            if(res.data.success)
            {
            toast.success("product removed successfully from cart");
            }
            else
            {
              toast.error("error while removing product from cart");
            }
        }
        const fetchCartData=async()=>
        {
          let token=localStorage.getItem("token");
          const res=await axios.get("/user/cart",{ headers:{
            Authorization: `Bearer ${token}`,
          }});
          if(res.data.success)
          {
            console.log(res.data.product.cart);
            setCart(res.data.product.cart);
            setDiscount(res.data.discount);
            setBill(res.data.bill);
            setAmount(res.data.amount);
            console.log(bill);
            console.log("successfully fetched record"+" "+cart+" hello");
          }
        }
        const fetchFavData=async()=>
        {
          let token=localStorage.getItem("token");
          const res=await axios.get("/index/favourites",{ headers:{
            Authorization: `Bearer ${token}`,
          }});
          if(res.data.success)
          {
            let d=res.data.products.favourites;
            console.log(d);
            setFav(d);
            console.log(fav);
            console.log("successfully added product to favourite");
          }
        }
        // useEffect(() => {
        //   console.log("Cart updated:", cart);
        //   console.log(username);
        // }, []);
        
    // useEffect(()=>
    // {
    //     async function loadData() {
    //       try{
    //         await fetchProductList();
    //         console.log(cart);
    //       }
    //       catch(e)
    //       {
    //         console.log(e);
    //       }
    //       }
    //       loadData();
    // },[]);
     useEffect(() => {
      fetchProductList();
      authUser();
    }, []);
    
    const contextValues={
      products,
      setProducts,
      token,setToken,
      fetchProductList,
      fetchCartData,
      removeFromCart,
      fetchFavData,
      addToCart,addToFavourites,cart,
      username,
      setUsername,
      fav,setFav,discount,bill,amount
    }

  return (
     <StoreContext.Provider value={contextValues}>
        {children}
     </StoreContext.Provider>
  );
}

export default StoreContextProvider;
