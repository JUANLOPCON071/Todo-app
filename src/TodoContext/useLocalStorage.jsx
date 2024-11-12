import React, { useState } from "react";

function useLocalStorage(itemName, initialValue){
  const [ item, setItem ] = useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.
          stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
  
        setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(true);
        }
      }, 2000);
    }, [])
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.
      stringify(newItem));
      setItem(newItem);
    }
  
    return {
      item, 
      saveItem,
      loading,
      error,
    }
  
  }

  export { useLocalStorage };

  // const defaultTodos = [
//   { text: "Ir al gym", completed: true },
//   { text: "Tomar el curso de Intro a React.js", completed: false },
//   { text: "Comprar Regalo de mi mama", completed: false },
//   { text: "Mandarme cortar el cabello", completed: false },
//   { text: "Ver clase sobre estados", completed: true },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');