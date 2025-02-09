import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5  screen flex-wrap'>
        <div className='mt-10  bg-red-400 w-full  lg:w-[45%] rounded-xl  py-10 px-9'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
        <div className=' mt-10 bg-blue-400  w-full lg:w-[45%] rounded-xl  py-10 px-9'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Active Task</h3>
        </div>

        <div className='  mt-10 bg-green-400  w-full lg:w-[45%] rounded-xl  py-10 px-9'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>


        <div className=' mt-10 bg-yellow-400 w-full lg:w-[45%] rounded-xl py-10 px-9'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber