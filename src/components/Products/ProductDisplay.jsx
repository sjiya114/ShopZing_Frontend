import React, { useContext } from 'react'
import { StoreContext } from '../../context/Context'
import favimage from '../../assets/favourite.png'
import { Link } from 'react-router-dom'

const ProductDisplay = ({panel,id,textcolor,price,bgcolor,image,name}) => {
  const {addToCart,addToFavourites}=useContext(StoreContext);
  return (
    <>
    <div className={`max-w-sm border-2 border-[${panel}] rounded-lg shadow bg-[${bgcolor}]`}>
        <Link onClick={(e)=>addToFavourites(id)}   placeholder="favourites"><img src={favimage} alt="image" title="Add to favourite" className="w-10 h-10 justify-self-end pt-2 pr-2 font-bold  "/></Link>
        <Link>
            <img className="p-8 rounded-t-lg  w-60 h-60 "  src={URL.createObjectURL(new Blob([new Uint8Array(image.data)], { type: 'image/png' }))} alt="product image"/>
        </Link>
        <div className="px-5 pb-5">
            <Link to="/">
                <h5 className="text-xl font-semibold tracking-tight text-color-[<%= products.textcolor %>] ">{name}</h5>
            </Link>
            <div className="flex items-center justify-between">
                <span className={`text-3xl font-bold text-[${textcolor}]`}>{price}</span>
                 <hr/>
                <Link  onClick={(e)=>addToCart(id)}
                    className=" text-white cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                    Add to Cart   
                </Link>
            </div>

        </div>
        </div>
    </>
  )
}

export default ProductDisplay
