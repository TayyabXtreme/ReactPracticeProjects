import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  console.log(data)
  return (
   <div className='p-10 bg-[#1c1c1c]   h-screen overflow-y-auto '>

    <Header data={data}/>
    <TaskListNumber data={data} />
    <TaskList data={data}/>
    

    </div>



  )
}

export default EmployeeDashboard