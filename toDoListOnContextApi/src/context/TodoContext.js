import { useContext,createContext } from "react";

export const TodoContext = createContext({
    todos:[
        {id:1,todo:"Learn React",completed:false},
    ],
    addTodo:(todo)=>{}, 
    updateTodo:(todoId,todo)=>{},
    deleteTodo:(todoId)=>{},
    toggleComplete:(todoId)=>{}
    
});

export const useTodo=()=>{
    return useContext(TodoContext);
}

 export const TodoProvider=TodoContext.Provider;