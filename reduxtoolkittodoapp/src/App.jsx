import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import ViewTodos from './components/ViewTodos';
import UpdateTodo from './components/UpdateTodo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos, deleteTodos } from './features/todoSlice';
import { updateTodos } from './features/todoSlice';
const App = () => {

  const [todoToUpdate, setTodoToUpdate] = useState(null);
  const dispatch=useDispatch()

  const addTodo = (text) => {
    dispatch(addTodos(text))
    
  };



  const deleteTodo = (id) => {

    dispatch(deleteTodos(id))
    
  };

  const updateTodo = (updatedTodo) => {
    dispatch(updateTodos(updatedTodo))
    
    setTodoToUpdate(null);
  };

  const reduxTodo=useSelector(state=>state.todos)
  console.log(reduxTodo)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
         Todo App
        </h1>
        <AddTodo onAdd={addTodo} />
        {todoToUpdate ? (
          <UpdateTodo
            todo={todoToUpdate}
            onUpdate={updateTodo}
            onCancel={() => setTodoToUpdate(null)}
          />
        ) : (
          <ViewTodos
            todos={reduxTodo}
            onDelete={deleteTodo}
            onUpdate={setTodoToUpdate}
          />
        )}
      </div>
    </div>
  );
};

export default App;

