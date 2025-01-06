import React, { useState } from 'react'


const Header = () => {
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }
 
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br></br> <span className='text-3xl font-semibold'> Admin 👋 </span></h1>
        <button 
        onClick={logOutUser}
        className='bg-emerald-500 text-white px-3 py-2 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header