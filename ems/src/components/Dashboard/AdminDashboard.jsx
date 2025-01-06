import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
const AdminDashboard = ({changeUser}) => {
  return (
    <div className='h-screen w-full p-10 overflow-y-auto'>
        <Header changeUser={changeUser} />
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard