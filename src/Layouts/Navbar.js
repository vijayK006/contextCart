import React from 'react'

const Navbar = () => {
  return (
    <>
     <nav className='d-flex justify-content-between bg-light align-items-center px-5 py-2 border-bottom'>
<h3 className='m-0' style={{color:"orange"}}>Navbar .</h3>

<div className='d-flex gap-3'>
<p className='m-0'>Home</p>
<p className='m-0'>About us</p>
<p className='m-0'>Shop</p>
<p className='m-0'>Our Blog</p>
<p className='m-0'>Contact us</p>
</div>

     </nav> 
    </>
  )
}

export default Navbar
