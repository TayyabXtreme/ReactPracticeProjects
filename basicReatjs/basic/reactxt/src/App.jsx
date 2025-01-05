import React from 'react'
import { useState } from 'react';
import Hello from './components/Hello';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Card from './components/Card';

const App = () => {
  
  const [userName, setuserName] = useState("")
  return (
  
   <>
   
   <NavBar/>
   {/* <h1 className='h-svh'></h1> */}
   <div className='flex'> 
   <Card name="Tayyab" description={"This is description"}/>  
   <Card name="Anees" description={"This is description"}/>
   </div>
   <Footer/>
   </>
  )
}

export default App