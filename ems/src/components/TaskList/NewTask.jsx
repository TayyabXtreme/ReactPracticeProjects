import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-full md:w-[300px] p-5 bg-green-400 rounded-xl'>
    <div className='flex justify-between items-center'>
       <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>{data.category}</h3>
       <h4 className='text-sm'>{data.date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>
    {data.title}
    </h2>
    <p className='text-sm mt-2'>
    {data.description}
    </p>

    <div className='mt-4 '>

        <button className='bg-blue-400 py-1 px-2 rounded-sm' >Accept Task</button>
    </div>
</div>
  )
}

export default NewTask