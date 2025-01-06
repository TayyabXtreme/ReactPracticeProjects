import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localstorage';


export const AuthContext = createContext();


const AuthProvider = ({children}) => {

  const [userDatas, setUserDatas] = useState([]);

    

    useEffect(() => {
        // setLocalStorage()
        const {employee,admin}=getLocalStorage()
        setUserDatas(employee)
    },[])
    

  return (
    <div>
       <AuthContext.Provider value={[userDatas,setUserDatas]}>
        {children}
        </AuthContext.Provider>
       
        </div>
  )
}

export default AuthProvider