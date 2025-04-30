import React from 'react'

function Footer() {
  return (
      <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-between px-10 bg-black text-white py-10 w-full">
        <div className="flex flex-col justify-around ">
            <h1 className="font-bold">Company</h1>
          <div>About</div>
          <div>Career</div>
          <div>Brand Centre</div>
          <div>blog</div>
        </div>
        <div className="flex flex-col justify-around ">
            <h1 className="font-bold">HelpCenter</h1>
           <div>Discord Server</div>
           <div>Twitter</div>
           <div>Facebook</div>
           <div>Contact us</div>
        </div>
        <div className="flex flex-col justify-around" >
            <h1 className="font-bold">Legal</h1>
           <div>Privacy Policy</div>
           <div>Licensing</div>
           <div>Terms & Conditions</div>
           <div></div>
        </div>
    </div>
      </>
  )
}

export default Footer
