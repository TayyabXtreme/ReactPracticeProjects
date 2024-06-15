import React, { useState } from 'react'
import { useTodo } from '../context'

const TodoForm = () => {
    const {addTodo}=useTodo()
    const [todo, settodo] = useState('')
    const add=()=>{
       
        addTodo({todo,completed:false})
        settodo('')
    }

    

  return (
    <div className='bg-gray-700 text-white mt-4 p-10'>

<div className="flex mt-4">
                <input 
                onKeyDown={(e)=>e.key==='Enter' && add()}
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker text-black"
                 placeholder="Add Todo"
                 value={todo}
                 onChange={(e)=>settodo(e.target.value)}
                 />
                <button 
                onClick={add}
                className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button>
            </div>

    </div>
  )
}

export default TodoForm