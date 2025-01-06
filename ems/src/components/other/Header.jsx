import React from 'react'

const Header = ({data}) => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br></br> <span className='text-3xl font-semibold'> {data.firstName} 👋 </span></h1>
        <button className='bg-emerald-500 text-white px-3 py-2 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header