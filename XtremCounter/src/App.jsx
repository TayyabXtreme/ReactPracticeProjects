import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [max, setMax] = useState(10)
  const [min, setMin] = useState(-10)
  const inc=()=>{
    if(count<max)
    setCount(count+1)
  }
  const dec=()=>{
    if(count>min)
    setCount(count-1)
  }
  return (
    <>
      <div>
        <p>Ranges</p>
        <span style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
          
          <span style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
         
          min  <input type="text" style={{width:"50px"}} value={min} onChange={(e)=>setMin(e.target.value)}/>
         
          </span>
         
          <span style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            
          max 
        
          <input type="text" style={{width:"50px"}} value={max} onChange={(e)=>setMax(e.target.value)}/>
          </span>
         
        
        </span>
        
      </div>
     <h1>Xtrem Counter</h1>
     <p>{count}</p>
     <div style={{display:"flex",justifyContent:"space-between"}}>
     
      <button onClick={inc} className='inc' style={{width:"100px"}}>+</button>
      
      <button onClick={dec} className='dec' style={{width:"100px"}}>-</button>
     </div>
    </>
  )
}

export default App
