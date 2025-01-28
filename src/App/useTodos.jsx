import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
    const {
        item: todos, 
        saveItem: saveTodos,
        sincronizeItem: sincronizeTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      const [ searchValue, setSearchValue ] = React.useState('');
      const [ openModal, setOpenModal ] = React.useState(false);
    
      const completedTodos = todos.filter(
        todo => !!todo.completed
      ).length;
      const totalTodos = todos.length
      
      const searchedTodos = todos.filter(
        (todo) => {
          return todo.text.toLowerCase().includes(searchValue.toLowerCase())
        }
      )

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({text, completed: false});
        saveTodos(newTodos);
      }
    
      const completeTodo = (text) => {
        const newItem = [...todos];
        const todoIndex = newItem.findIndex(
          (todo) => todo.text === text
        );
        newItem[todoIndex].completed = true;
        saveTodos(newItem);
      }
    
      const deleteTodo = (text) => {
        const newItem = [...todos];
        const todoIndex = newItem.findIndex(
          (todo) => todo.text === text
        );
        newItem.splice(todoIndex,1);
        saveTodos(newItem);
      }
    return {
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo,
      sincronizeTodos
    }
}

export { useTodos };