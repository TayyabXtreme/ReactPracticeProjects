import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { TodoProvider } from './context'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo=(todo)=>{
    var data = {
      id: Date.now(),
      ...todo
    }

    setTodos((prev)=>[...prev,data])

  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }

  const updatedTodo = (todoId, newTask) => {
    setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===todoId? newTask:prevtodo)))
  }

  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem('todoapp'))
  //   if(todos && todos.length>0){
  //     setTodos(todos)
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('todoapp',JSON.stringify(todos))
  // }
  // ,[todos])


  



  return (
    <>
    <TodoProvider value={{todos,addTodo,deleteTodo,updatedTodo}}>
    <div className='p-10 px-12'>
     <h1 className='text-center bg-blue-600 text-white p-3 text-3xl font-bold italic'>XTREM TODO APP</h1>

     <TodoForm/>
      <div className='bg-gray-900 text-white p-4'>









     {/* {

      todos.map((todo)=>(
        <div key={todo.id}>
        <TodoList todo={todo} />
        </div>
      ))


     } */}


      {

      todos.map((todo,i)=>(
        <div >
        <TodoList todo={todos[i]} />
        </div>
      ))


      }











     
      </div>


    </div>
    </TodoProvider>
    </>
  )
}

export default App
