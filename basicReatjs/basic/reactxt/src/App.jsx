import React, { useState } from 'react'

const App = () => {
  
  const [user, setuser] = useState("Tayyab")
  const changeUser=()=>{
    setuser("Anees")
    
    
  }
  return (
    
   <div>
    <h1 className='text-5xl'>UserName is {user}</h1>
    <button onClick={changeUser}>Change user</button>

    <hr />
    <hr />
      <h1>Hello Guys</h1>
   </div>
  )
}

export default App