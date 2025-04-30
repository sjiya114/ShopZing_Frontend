import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
export const StoreContext=createContext(null);
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function StoreContextProvider({children}) {
    const url="http://localhost:5000";
    const [products,setProducts]=useState([]);
    const [token,setToken]=useState('');
    const [cart,setCart]=useState([]);
    const [discount,setDiscount]=useState(0);
    const [amount,setAmount]=useState(0);
    const [bill,setBill]=useState(0);
    const [fav,setFav]=useState([]);
    const [username,setUsername]=useState({});
    const fetchProductList=async()=>
    {
      const res=await axios.get("http://localhost:5000/index/products");
      if(res.data.success)
      {
        setProducts(res.data.products);
        // console.log("successfully fetched record");
      }
    }
    useEffect(() => {
      console.log("Username updated:", username);
    }, [username]);
    
    const addToCart=async(_id)=>
      {
          const res=await axios.get(`http://localhost:5000/user/addtocart/${_id}`,{ headers:{
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
            const res=await axios.get(`http://localhost:5000/user/addtofavourites/${_id}`);
            if(res.data.success)
            {
              toast.success("added to favourites successfully");
              const nav=useNavigate();
              nav('/home');   
            }
        }
      const removeFromCart=async(_id)=>
        {
            const res=await axios.get(`http://localhost:5000/user/removefromcart/${_id}`,{ headers:{
              Authorization: `Bearer ${token}`,
            }});
            if(res.data.success)
            {
              const nav=useNavigate();
              nav('/allproducts');   
            }
        }
        const fetchCartData=async()=>
        {
          let token=localStorage.getItem("token");
          const res=await axios.get("http://localhost:5000/user/cart",{ headers:{
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
          const res=await axios.get("http://localhost:5000/index/favourites",{ headers:{
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
        useEffect(() => {
          console.log("Cart updated:", cart);
          console.log(username);
        }, [cart]);
        
    useEffect(()=>
    {
        async function loadData() {
          try{
            await fetchProductList();
            await fetchCartData();
            await fetchFavData();
            console.log(cart);
          }
          catch(e)
          {
            console.log(e);
          }
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                
            }
          }
          loadData();
    },[cart]);
    const contextValues={
      products,
      setProducts,
      token,setToken,
      fetchProductList,
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
