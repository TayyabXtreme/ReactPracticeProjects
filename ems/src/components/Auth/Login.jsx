import React from 'react'
import { useState } from 'react';

const Login = ({handleLogin}) => {
    const [userDetialed,setUserDetailed]=useState({email:'',password:''})
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(userDetialed)
        handleLogin(userDetialed.email,userDetialed.password)

    }
  return (
    <div className='flex items-center justify-center h-screen w-full '>
    <div className='border-2 border-emerald-600 rounded-xl p-20'>
        <form  className='flex flex-col items-center justify-center'>
            <input value={userDetialed.email} onChange={(e)=>setUserDetailed({...userDetialed, email: e.target.value})} required className=' outline-none bg-transparent border-2 border-emerald-600 py-3 text-xl px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your Email' />
            <input calue={setUserDetailed.password} onChange={(e)=>setUserDetailed({...userDetialed,password:e.target.value})} required className='  outline-none bg-transparent border-2 border-emerald-600 py-3 text-xl px-5 rounded-full placeholder:text-gray-400 mt-3' type="password" placeholder='Enter your Password' />
             <button onClick={(e)=>submitHandler(e)} className=' outline-none bg-emerald-600   py-3 mt-3 text-xl px-5 rounded-full '>Login</button>

        </form>
    </div>
    </div>
  )
}

export default Login