import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/UserContext'

const NavBar = () => {
  const data=useContext(DataContext);
  console.log(data)
  return (
    <div><nav className=' bg-emerald-600 w-full flex py-5 px-10 items-center justify-between'>
    <Link to='/'><h2>ATX</h2></Link>
    <div className='flex items-center justify-around w-1/2'>
    <Link to='/about'>  <h4>About</h4> </Link>
    <Link to='/contact'>  <h4>Contact</h4></Link>
      <h4>Services</h4>
      <h4>Your Account</h4>

    </div>
    <h1>{data}</h1>
   </nav></div>
  )
}

export default NavBar