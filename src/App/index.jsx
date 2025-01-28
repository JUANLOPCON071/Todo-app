import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter  } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm'
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { ChangeAlert } from '../ChangeAlert';

function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal, 
    setOpenModal,
    completedTodos, 
    totalTodos, 
    searchValue, 
    setSearchValue, 
    addTodo,
    sincronizeTodos
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        totalTodos={totalTodos}
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        sincronize={sincronizeTodos}
        onError={() => <TodosError/>}
        onLoading={() => <TodosLoading/>}
        onEmptyTodos={() => <EmptyTodos/>}
        onEmptySearchResults={
          (searchText) => <p>No hay resultados para {searchText}</p>}
        // render={todo => (
        //   <TodoItem 
        //       key={todo.text} 
        //       text={todo.text}
        //       completed={todo.completed}
        //       onComplete={() => completeTodo(todo.text)}
        //       onDelete={() => deleteTodo(todo.text)}
        //     />
        // )}
      >
        {
          todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )
        }
      </TodoList>

      <CreateTodoButton 
        openModal={openModal} 
        setOpenModal={setOpenModal}
      /> 
      <ChangeAlert
        sincronize={sincronizeTodos}
        />
      {openModal && (
        <Modal>
          <TodoForm 
            setOpenModal={setOpenModal}
            addTodo={addTodo}
          />
        </Modal>
      )}
    </React.Fragment>
  );
}

export default App;
