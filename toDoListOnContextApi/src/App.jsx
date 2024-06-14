import { useEffect, useState } from 'react'

import './App.css'
import { TodoProvider } from './context'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const updateTodo = (todoId, newTask) => {
    setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===todoId? newTask:prevtodo)))
  }

  const deleteTodo = (todoId) => {
    setTodos((prev)=>prev.filter((prevtodo)=>prevtodo.id!==todoId))
  }

  const toggleComplete = (todoId) => {
    setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===todoId ? {...prevtodo,completed: !prevtodo.completed}:prevtodo)))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  }
  ,[todos])


  return (
    <>
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Xtrem Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      {todos.map((todo)=>(
                        <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo} />
                        </div>
                      ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
    </>
  )
}

export default App
