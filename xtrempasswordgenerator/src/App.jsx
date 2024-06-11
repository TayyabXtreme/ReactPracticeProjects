import { useEffect } from "react"
import { useRef } from "react"
import { useCallback } from "react"
import { useState } from "react"


function App() {
 const [length, setLength] = useState(8)
 const [numberAllowed, setNumberAllowed] = useState(false)
 const [charAllowed, setCharAllowed] = useState(false)
 const [password, setPassword] = useState("")
 const passwordRef=useRef(null)

 const passwordGenerator = useCallback(() => {
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(numberAllowed) str+="0123456789";
  if(charAllowed) str+="!@#$%^&*()_+`~{}[]|:;'<>,.?/";
  for(let i=1; i<=length; i++){
    // let char=Math.floor(Math.random()*str.length+1);
    pass+=str.charAt(Math.floor(Math.random()*str.length));
    // pass+=str.charAt(char);
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed,setPassword])
  

  const copyPasswordClipBoard =  useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length+1);
    window.navigator.clipboard.writeText(password)
  }, [password])
  
  useEffect(() => {
      passwordGenerator()
  } 
  , [length, numberAllowed, charAllowed, passwordGenerator])




  return (
    <>
     

     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-700">

      <h1 className="text-2xl text-center text-white mt-4"> Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4 my-3">

        <input 
        type="text" 
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="password" 
        ref={passwordRef}
        
        />

        <button 
        onClick={copyPasswordClipBoard}
        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>

      </div>
      <div className="flex text-sm gap-x-2">

      <div className="flex items-center gap-x-1">

        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className="cursor-pointer"
        onChange={(e)=>setLength(e.target.value)}
         />
         <label>Length:{length}</label>
      
      </div>
      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={()=>setNumberAllowed((prev)=>!prev)}
        />
      </div>
      <label htmlFor="numberInput">Numbers</label>

      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        id="characterInput"
        onChange={()=>setCharAllowed((prev)=>!prev)}
        />
      </div>
      <label htmlFor="numberInput">Characters</label>
      </div>

      



     </div>



    </>
  )
}

export default App
