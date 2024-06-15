import React, { useState } from 'react'
import { useTodo } from '../context'

const TodoList = ({ todo }) => {

    console.log(todo)
    const [isEditable, setIsEditable] = useState(true)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const { deleteTodo,updatedTodo } = useTodo()

    const edit = () => {
      updatedTodo(todo.id,{...todo,todo:todoMsg})
        setIsEditable(!isEditable)
    }

    return (
        <div className="flex mb-4 items-center rounded-lg bg-gray-800 p-1 px-4">
            {isEditable ? (
                <p className='w-full'>{todoMsg}</p>
            ) : (
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker text-black"
                    placeholder="Add Todo"
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                />
            )}

            {isEditable ? (
                <button 
                    className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
                    onClick={()=>setIsEditable(prev=>!prev)}
                >
                    Edit
                </button>
            ) : (
                <button 
                    className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
                    onClick={edit}
                >
                    Save
                </button>
            )}

            <button 
                className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
                onClick={() => deleteTodo(todo.id)}
            >
                Remove
            </button>
        </div>
    )
}

export default TodoList
















