import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
    const {
        item: todos, 
        saveItem: saveTodos,
        sincronizeItem: sincronizeTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V2', []);
      const [ searchValue, setSearchValue ] = React.useState('');
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
        const id = newTodoId(todos)
        const newTodos = [...todos];
        newTodos.push({
          text, 
          completed: false,
          id
        });
        saveTodos(newTodos);
      }
    
      const completeTodo = (id) => {
        const newItem = [...todos];
        const todoIndex = newItem.findIndex(
          (todo) => todo.id === id
        );
        newItem[todoIndex].completed = true;
        saveTodos(newItem);
      }

      const editTodo = (id, newText) => {
        const newItem = [...todos];
        const todoIndex = newItem.findIndex(
          (todo) => todo.id === id
        );
        newItem[todoIndex].text = newText;
        saveTodos(newItem);
      }

      const unCompleteTodo = (id) => {
        const newItem = [...todos];
        const todoIndex = newItem.findIndex(
          (todo) => todo.id === id
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

      const states = {
        loading,
        error,
        totalTodos,
        completedTodos,
        completeTodo,
        searchValue,
        searchedTodos,
        showCongratAler,
      }
      
      const stateUpdaters = {
        unCompleteTodo,
        setSearchValue,
        deleteTodo,
        resetTodos,
        addTodo,
        editTodo,
        sincronizeTodos,
        closeCongratAlert,
        setShowCongratAlert
      }

      return { states, stateUpdaters }
}

function newTodoId(todoList) {
  if (!todoList.length) {
    return 1;
  }

  const idList = todoList.map(todo => todo.id);
  const idMax = Math.max(...idList);
  return idMax + 1;
}

export { useTodos };