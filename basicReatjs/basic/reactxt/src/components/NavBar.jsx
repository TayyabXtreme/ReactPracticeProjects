import React from 'react'

const NavBar = () => {
  return (
    <div><nav className=' bg-emerald-600 w-full flex py-5 px-10 items-center justify-between'>
    <h2>ATX</h2>
    <div className='flex items-center justify-around w-1/2'>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Services</h4>
      <h4>Your Account</h4>
    </div>
   </nav></div>
  )
}

export default NavBar