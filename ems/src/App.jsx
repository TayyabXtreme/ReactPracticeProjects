import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Header from './components/other/Header'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localstorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {
  const [user,setuser]=useState(null)
  const [loggedInUserData,setLoggedInUserData]=useState(null)
  const authData=useContext(AuthContext)
  
  // useEffect(()=>{

  //   if(authData){
  //     const loggedInUSer=localStorage.getItem('loggedInUser')
  //     if(loggedInUSer){
  //       setuser(JSON.parse(loggedInUSer).role)
  //     }
      
  //   }
  // },[authData])
  
  const handleLogin=(email,password)=>{
    if(email=="admin@me.com" && password=="123"){
     
      setuser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
     
    }else if(authData){
      const employee=authData.employee.find((emp)=>emp.email==email && emp.password==password)
      
      if(employee){
        setuser('employee')
        setLoggedInUserData(employee)
     localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))


      }
     

    }
    
    else{
      alert("Invalid email or password")
    }
     console.log(email,password)
  }

  
  
 
  return (
    <>
    { !user ? <Login handleLogin={handleLogin}/>:'' }
    { user=='admin' ? <AdminDashboard/>: (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : "" ) }
  
    {/* <Login/> */}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}

    </>
  )
  
}

export default App