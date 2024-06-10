import { useState } from 'react'



function App() {
  const [color, setcolor] = useState("white")
  const [textColor, settextColor] = useState("black")
  
  const bgChange=(col)=>{   
   
    
    setcolor(col)
    if (col === textColor ) {
      settextColor('white');
    } else {
      settextColor(color);
    }
    
  }
  return (
   
     <div className='w-full h-screen' style={{background:color}}>
      <h1 className='text-5xl fixed flex-wrap flex justify-center top-1/2 inset-x-0 px-2' style={{color :textColor}}>Xtrem Color</h1>
      <div className='fixed flex-wrap flex justify-center bottom-12 inset-x-0 px-2'>


        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button className='bg-red-700 px-4 outline-none rounded-full text-white shadow-lg' onClick={()=>bgChange('red')}>Red</button>
        <button className='bg-green-700 px-4 outline-none rounded-full text-white shadow-lg' onClick={()=>bgChange('green')}>Green</button>
        <button className='bg-blue-700 px-4 outline-none rounded-full text-white shadow-lg' onClick={()=>bgChange('blue')}>Blue</button>
        <button className='bg-purple-700 px-4 outline-none rounded-full text-white shadow-lg' onClick={()=>bgChange('purple')}>Purple</button>
        <button className='bg-pink-700 px-4 outline-none rounded-full text-white shadow-lg' onClick={()=>bgChange('#e75480')}>Pink</button>
        <button className='bg-yellow-300 px-4 outline-none rounded-full text-white shadow-lg' onClick={()=>bgChange('yellow')}>Yellow</button>
        <button className='bg-black px-4 outline-none rounded-full text-white shadow-lg' onClick={()=>bgChange('black')}>Black</button>

        </div>


      </div>

     </div>
    
  )
}

export default App
