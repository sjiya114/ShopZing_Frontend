import React, { useContext } from 'react'
import Footer from '../Footer'
import { StoreContext } from '../../context/Context'
import Navbar from '../Navbar';

function Cart() {
  const { cart, discount, amount, bill } = useContext(StoreContext);
  return (
    <>
      <Navbar />
      <h1 className="h-32 bg-orange-700 text-red-100   text-center text-5xl px-6 py-10 font-semibold italic">Cart</h1>
      <hr />
      <div className="grid grid-cols-1 mx-5 max-w-fit border-2 border-black mt-10  ">
        {cart.map((products, index) => (
          <div className="flex flex-row border-1 border-black" >
            <div className="w-1/2 my-12 px-10">
              {/* <img className="w-full "  src={`data:image/png;base64,${ products.image.toString('base64')}`} alt="image"/>  */}
              <img className="w-full" src={URL.createObjectURL(new Blob([new Uint8Array(products.image.data)], { type: 'image/png' }))} alt="image" />
              {/* 1. products.image.data
This is assumed to be an array of bytes (e.g., [137, 80, 78, 71, ...]) — the raw binary image data returned from an API.

2. new Uint8Array(products.image.data)
Converts that byte array into a Uint8Array, which is needed to create binary data usable by the browser.

3. new Blob([ ... ], { type: 'image/png' })
Creates a Blob (binary large object) from the Uint8Array.

The second argument specifies the MIME type. If your image is a JPEG, change 'image/png' to 'image/jpeg'.

4. URL.createObjectURL(...)
Converts the Blob into a temporary object URL, like blob:http://localhost:3000/abc123..., which can be used as an image src.

The browser will fetch and render this image from memory.

5. <img ... />
The src now contains a valid image reference the browser can render. */}


            </div>
            <div className="w-1/2 px-3 font-bold my-12">
              <h1>Price:{products.price}</h1>
              <h1>Discount:{products.discount}</h1>
              <h1>Platform Fee:20</h1>
              <br />
              <button className="px-2 py-2 bg-blue-950 hover:bg-blue-700 cursor-pointer text-white rounded-md"><a href="/user/removefromcart/<%= products._id %>">Remove from Cart</a></button>
            </div>
          </div>
        ))}
        <hr className="border-1 border-black" />
      </div>
      {cart.length > 0 ? (
        <>
          <div className="border-2 border-black mx-5 my-2 px-2 py-2 max-w-fit font-semibold text-lg" >
            <h1>Bill</h1>
            <h2>Price {cart.length} items :Rs.{amount} </h2>
            <h2>Discount:-{discount}</h2>
            <h2>Platform Fee:20</h2>
            <h2>Delivery Charges:Rs.0 Free</h2>
            <h2>Total Amount:Rs.{bill}</h2>
          </div>
          <button className="px-2 rounded-md text-white bg-blue-800 mx-8 my-4 py-2 hover:bg-blue-700">Place Order</button>
        </>) : (<>
          <h1 className="text-gray-500 text-center italic mt-[116px] text-5xl ">Sorry!!</h1>
          <h1 className="text-gray-500 text-center italic mt-[10px] text-5xl ">Cart is Empty</h1>
        </>)}
      <Footer />
    </>
  )
}

export default Cart
