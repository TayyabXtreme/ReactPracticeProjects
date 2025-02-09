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
  const [userDatas,setUserDatas]=useContext(AuthContext)
 
  useEffect(()=>{
    const loggedInUSer=localStorage.getItem('loggedInUser')
    if(loggedInUSer){
      const userData=JSON.parse(loggedInUSer)
      setuser(userData.role)
      setLoggedInUserData(userData.data)
      
    }
    
  },[])
  
  const handleLogin=(email,password)=>{
    if(email=="admin@me.com" && password=="123"){
     
      setuser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
     
    }else if(userDatas){
      const employee=userDatas.find((emp)=>emp.email==email && emp.password==password)
      
      if(employee){
        setuser('employee')
        setLoggedInUserData(employee)
     localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))


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
    { user=='admin' ? <AdminDashboard changeUser={setuser} />: (user == 'employee' ? <EmployeeDashboard changeUser={setuser} data={loggedInUserData} /> : "" ) }
  
    {/* <Login/> */}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}

    </>
  )
  
}

export default App