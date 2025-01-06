import React from 'react'
import AccepTask from './AccepTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    console.log("data",data)
  return (
    <div id='tasklist' className='h-[50%] px-1 overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5  mt-10'>
       {
        data.tasks.map((task)=>{
            return <h1>hello gyes</h1>
        })
       }

        


           
        

        

        
        

        
    </div>
  )
}

export default TaskList