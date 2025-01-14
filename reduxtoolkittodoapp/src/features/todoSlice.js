
import { createSlice } from "@reduxjs/toolkit";


const initialState={
    todos:[{
        id:Date.now(),
        text:'Hello First'
    }]
}

const todoSlice=createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodos:(state,action)=>{
            state.todos.push({id:Date.now(),text:action.payload})
        },
        deleteTodos:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!=action.payload)
        },
        updateTodos:(state,action)=>{
          console.log(action.payload)
          
            state.todos=state.todos.map((todo) =>
                todo.id === action.payload.id ? action.payload : todo
              );
        }
    }
})


export default todoSlice.reducer

export const {addTodos,updateTodos,deleteTodos}=todoSlice.actions