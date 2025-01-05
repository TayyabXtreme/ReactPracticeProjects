import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5  bg-[#1c1c1c] mt-7 rounded'>
    <form className='flex flex-wrap w-full items-start justify-between'>
    <div className='w-1/2'>

        <div>
        
        <h3 className='text-gray-300 text-sm mb-0.5'>Task Title</h3>
        <input className='text-sm py-1 px-2 w-4/5 bg-transparent  rounded outline-none border-[1px] border-gray-400 mb-4 ' type="text" placeholder='Make a ui desing' />

        </div>


        <div>

        <h3 className='text-gray-300 text-sm mb-0.5'>Date</h3>
        <input className='text-sm py-1 px-2 w-4/5 bg-transparent  rounded outline-none border-[1px] border-gray-400 mb-4 ' type="date" />

        </div>

        <div>
        <h3 className='text-gray-300 text-sm mb-0.5'>Asing to</h3>
        <input className='text-sm py-1 px-2 w-4/5 bg-transparent  rounded outline-none border-[1px] border-gray-400 mb-4 ' type="text" placeholder='employee name' />
        </div>
        
        <div>
        <h3 className='text-gray-300 text-sm mb-0.5'>Category</h3>
        <input className='text-sm py-1 px-2 w-4/5 bg-transparent  rounded outline-none border-[1px] border-gray-400 mb-4 ' type="text" placeholder='desing, dev, etc' />

        </div>
        
        


    </div>
        
        <div className='w-1/2 flex flex-col items-start'>
        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
        <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' cols="30" rows="10"></textarea>

        </div>

        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Creat Task</button>
        
    </form>
</div>
  )
}

export default CreateTask