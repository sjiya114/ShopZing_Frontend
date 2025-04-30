import React, { useContext, useState } from 'react'
import './Profile.css'
import { StoreContext } from '../../context/Context'
import Navbar from '../Navbar';
import Footer from '../Footer';
import axios from 'axios';
function Profile() {
    const {username,token}=useContext(StoreContext);
    const [data,setData]=useState("");
    const handleSubmitButton=async(e)=>
    {
              e.preventDefault();
              const formdata=new FormData();
              formdata.append("image",data);
              let res=await axios.post("http://localhost:5000/user/addimage",formdata,{
                headers: { Authorization: `Bearer ${token}`,
                //  "Content-Type": "multipart/form-data"
                 },
              });
              console.log(res.data);
              if(res.data.success)
              {
                console.log("created product successfully");
                setData(null);
              }
            }
  return (
    <>
    <Navbar/>
    <div>
        <h1 className="text-center font-bold text-5xl py-10">Profile Page</h1>
    </div>
    <div>
    
    <div>
        {username.Profile ? (
            <div className="place-items-center py-2">
                <img  src={URL.createObjectURL(new Blob([new Uint8Array(username.Profile.data)], { type: 'image/png' }))}     className="w-40 h-40 border-2 border-white shadow-xl shadow-blue-950   "  />
                <br></br>
                {/* <form method="post" enctype="multipart/form-data"> */}
                <input type="file"  onChange={(e) => setData( e.target.files[0])} name="image"  placeholder="Change Profile"/>
                <button onClick={handleSubmitButton}>Change</button>
                {/* </form> */}
              </div>
         ) : (
            <>
            <img className="w-16 h-16"
                src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?ga=GA1.1.1311680707.1735229390&semt=ais_hybrid"
                alt="img"/>
            {/* <form  method="post" encType="multipart/form-data"> */}
                <input type="file"  onChange={(e) => setData( e.target.files[0])} name="image"/>
                <button onClick={handleSubmitButton}>Add Profile</button>
            {/* </form> */}
            </>
         ) }
    </div>
    </div>
    <div className='text-shadow-2xs text-shadow-white text-cyan-950 px-4 py-4 font-serif text-2xl'>
    <p className="text-center font-semibold py-2">Name:{username.name}
     </p>
    <p className="text-center font-semibold py-2">Email:{username.email}
    </p>
    <p className="text-center font-semibold py-2">Contact:{Number(username.contact)}</p>
</div>
<Footer/>
    </>
  )
}

export default Profile
