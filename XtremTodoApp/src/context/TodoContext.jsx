import React from "react";

export const TodoContext = React.createContext({
                                                todos:[{id:1,todo:'react',completed:false}],
                                                addTodo:(todo)=>{},
                                                updatedTodo:(id,todo)=>{},
                                                deleteTodo:(todo)=>{},
                                            })

export const TodoProvider=TodoContext.Provider;

export const useTodo=()=> React.useContext(TodoContext)