import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authData=useContext(AuthContext)
    console.log(authData.employee)
  return (

    
    <div id='tasklist' className='bg-[#1c1c1c] p-5 mt-5 rounded '>
       
         <div className={`  bg-red-400 mb-2 py-2 px-4 flex justify-between rounded`} >
         <h2 className='w-1/5 '>Employee Name</h2>
         <h3 className='w-1/5 '> New Task</h3>
         <h5 className='w-1/5 '>Active Task</h5>
         <h5 className='w-1/5 '>Complete Task</h5>
         <h5 className='w-1/5 '>Failed Task</h5>
         </div>
         <div id='tasklist' className='h-[80%] overflow-y-auto'>
         {
        authData.employee.map((elem,id)=>{
            return (
                <div className={`  bg-transparent border-[1px] border-emerald-600 mb-2 py-2 px-4 flex justify-between rounded overflow-y-auto`} key={id}>
                    <h2 className='w-1/5  text-lg font-bold '>{elem.firstName}</h2>
                    <h3 className='w-1/5  text-lg font-bold text-white-600'> {elem.taskNumbers.newTask}</h3>
                    <h5 className='w-1/5 text-lg font-bold  text-blue-600'>{elem.taskNumbers.active}</h5>
                    <h5 className='w-1/5 text-lg font-bold  text-yellow-400'>{elem.taskNumbers.completed}</h5>
                    <h5 className='w-1/5 text-lg font-bold  text-red-600'>{elem.taskNumbers.failed}</h5>
                </div>
            )

        })
       }
       </div>
       
           </div>
  )
}

export default AllTask