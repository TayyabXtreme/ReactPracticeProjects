import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Header from './components/other/Header'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localstorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {
  const [user,setuser]=useState(null)
  const authData=useContext(AuthContext)

  useEffect(()=>{

    if(authData){
      const loggedInUSer=localStorage.getItem('loggedInUser')

    }
  },[])
  
  const handleLogin=(email,password)=>{
    if(email=="admin@me.com" && password=="123"){
      console.log("admin")
      setuser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      console.log(user)
    }else if(authData && authData.employee.find((e)=>e.email==email) && authData.employee.find((e)=>e.password==password)){
      console.log("user")
      setuser('user')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'user'}))
      
      console.log(user)

    }
    
    else{
      alert("Invalid email or password")
    }
     console.log(email,password)
  }

  
  
 
  return (
    <>
    { !user ? <Login handleLogin={handleLogin}/>:'' }
    { user=='admin' ? <AdminDashboard/>:'' }
    { user=='user' ? <EmployeeDashboard/>:'' }
    {/* <Login/> */}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}

    </>
  )
  
}

export default App