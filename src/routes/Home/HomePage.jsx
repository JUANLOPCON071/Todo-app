import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useTodos } from '../useTodos';
import { TodoHeader } from '../../ui/TodoHeader';
import { TodoCounter  } from '../../ui/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { TodosError } from '../../ui/TodosError';
import { TodosLoading } from '../../ui/TodosLoading';
import { EmptyTodos } from '../../ui/EmptyTodos';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { ChangeAlert } from '../../ui/ChangeAlert';
import { CongratulationsAlert } from '../../ui/CongratulationsAlert';

function HomePage() {
  const navigate = useNavigate();
  const { states, stateUpdaters } = useTodos();

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    completeTodo,
    searchValue,
    searchedTodos,
    // openModal,
    showCongratAler
  } = states;

  const {
    unCompleteTodo,
    setSearchValue,
    deleteTodo,
    resetTodos,
    // setOpenModal,
    addTodo,
    sincronizeTodos,
    closeCongratAlert,
  } = stateUpdaters;

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
              key={todo.id} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.id)}
              onEdit={() => navigate('/edit/' + todo.id)}
              unComplete={() => unCompleteTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          )
        }
      </TodoList>

      <CreateTodoButton 
        onClick={() => navigate('/new')}
      /> 
      <ChangeAlert
        sincronize={sincronizeTodos}
        completedTodos={completedTodos}
      />
      {showCongratAler && completedTodos === totalTodos && totalTodos > 0 && (
        <CongratulationsAlert 
            resetTodos={resetTodos}
            closeCongratAlert={closeCongratAlert}
        />
      )}
      {/* {openModal && (
        <Modal>
          <TodoForm 
            setOpenModal={setOpenModal}
            addTodo={addTodo}
          />
        </Modal>
      )} */}
    </React.Fragment>
  );
}

export { HomePage };