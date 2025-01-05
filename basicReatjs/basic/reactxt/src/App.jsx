import React from 'react'
import { useState } from 'react';

const App = () => {
  const sumbitHandler = (e) => {
    e.preventDefault();
    console.log('submit')
  }
  const [userName, setuserName] = useState("")
  return (
   <div>
    <form onSubmit={(e)=>sumbitHandler(e)}>
      <input 
      className='px-4  rounded  text-black py-3 text-xl m-5' 
      type="text"
      value={userName}
      onChange={(e)=>setuserName( e.target.value)}
      />
      <input className='px-4 py-3 text-xl font-semibold bg-emerald-600 border-1 rounded' type="submit" />
    </form>
   </div>
  )
}

export default App