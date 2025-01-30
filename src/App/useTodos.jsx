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
      const [showCongratAler, setShowCongratAlert] = React.useState(true)
    
      const completedTodos = todos.filter(
        todo => !!todo.completed
      ).length;
      const totalTodos = todos.length
      
      const searchedTodos = todos.filter(
        (todo) => {
          return todo.text?.toLowerCase().includes(searchValue.toLowerCase())
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

      const unCompleteTodo = (text) => {
        const newItem = [...todos];
        const todoIndex = newItem.findIndex(
          (todo) => todo.text === text
        );
        newItem[todoIndex].completed = false;
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

      const resetTodos = () => {
        saveTodos([])
        setShowCongratAlert(true)
      }

      const closeCongratAlert = () => {
        setShowCongratAlert(false)
      }

    return {
      loading,
      error,
      completedTodos,
      unCompleteTodo,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      resetTodos,
      openModal,
      setOpenModal,
      addTodo,
      sincronizeTodos,
      closeCongratAlert,
      showCongratAler,
      setShowCongratAlert
    }
}

export { useTodos };