import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/Context'
import ProductDisplay from './Products/ProductDisplay';
import { Link } from 'react-router-dom';

function Products() {
    const [category,setCategory]=useState("All");
    const {products,fetchProductList}=useContext(StoreContext);
    let prod=category==="All"?
    products:
    (category==="discounted"?
      (products.filter((product)=>(Number(product.discount)>0)))
      :(category==="old"?(products.sort((a,b)=>((( (new Date(a.date).getDate()===new Date(b.date).getDate())?(new Date(a.date).getTime()-new Date(b.date).getTime()):(new Date(a.date).getDate()-new Date(b.date).getDate()))))))
      :(category==="new"?(products.sort((a,b)=>((( (new Date(a.date).getDate()===new Date(b.date).getDate())?(new Date(b.date).getTime()-new Date(a.date).getTime()):(new Date(b.date).getDate()-new Date(a.date).getDate())))))):<></>)
    )
  )
    
    // const onChangeButton=(category)=> {
    //   if(category==="All")
    //   {
    //     prod=products;
    //   }
    //   else if(category==="new")
    //   {
    //     prod=products.toReversed();
    //   }
    //   else if(category==="old")
    //   {
    //     prod=products;
    //   }
    //   else if(category==="discounted")
    //   {
    //     prod=products.filter((product,index)=>
    //     {
    //         return (Number) (product.discount)>0;
    //   })
    //   }
    // }
  return (
    <>
    <div id="m1"  className="w-full h-auto flex items-start px-20 py-20 max-md:flex-col">
    <div  id="side" className="w-[25%] flex h-screen flex-col  max-md:flex-row max-md:w-[100%]  space-x-4 max-md:max-h-fit items-start">
        {/* <div className="mt-10">
            <form action="/products/sort" method="post">
                <select name="option" id="option">
                    <option value="new" onSelect={()=>{setCategory("new")}}>Newest</option>
                    <option value="old" onSelect={()=>{setCategory("old")}}>Oldest</option>
                </select>
                <button type="submit">Change</button>
            </form>
        </div> */}
        <div className="mt-32 max-md:mt-10 font-bold">
            {/* <Link className="block w-fit mb-2" href="">New Product</Link> */}
            <button className="block w-fit mb-2" onClick={(e)=>{setCategory("All")}}  >All Products</button>
            <button className="block w-fit mb-2" onClick={(e)=>{setCategory("discounted")}} >Discounted Products</button>
        </div>
        <div className="mt-32  max-md:mt-10 font-bold">
            <Link className="block w-fit mb-2" to="">Filter by :</Link>
            <button className="block w-fit mb-2" onClick={(e)=>{setCategory("new")}} >Newest First</button>
            <button className="block w-fit mb-2" onClick={(e)=>{setCategory("old")}} >Oldest First</button>
        </div>
    </div>
    <div id="abc"  className="w-[75%] flex flex-row  max-md:w-[100%]    justify-center  flex-wrap  space-x-6 space-y-6">
        <div>
        </div>
    {prod.length>=1 && prod.map((product,index)=>(
     <ProductDisplay key={index} panel={product.panelcolor}  id={product._id} textcolor={product.textcolor} price={product.price}
     name={product.name} image={product.image} bgcolor={product.bgcolor} />
    ))}
    </div>
    </div>
    
    
    
    </>
  )
}

export default Products
