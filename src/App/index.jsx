import React from 'react';
import { Modal } from '../Components/Modal';
import { useTodos } from '../Hooks/useTodos';
import { TodoList } from '../Components/TodoList';
import { TodoItem } from '../Components/TodoItem';
import { TodoForm } from '../Components/TodoForm';
import { TodoHeader } from '../Components/TodoHeader';
import { TodoSearch } from '../Components/TodoSearch';
import { TodosError } from '../Components/TodosError';
import { EmptyTodos } from '../Components/EmptyTodos';
import { TodoCounter } from '../Components/TodoCounter';
import { ChangeAlert } from '../Components/ChangeAlert';
import { TodosLoading } from '../Components/TodosLoading';
import { Navbar } from '../Components/Navbar';

import { CreateTodoButton } from '../Components/CreateTodoButton';
import { Box, Typography } from '@mui/material';

function App() {
  const { state, stateUpdaters } = useTodos();

  const {
    error,
    loading,
    openModal,
    totalTodos,
    searchValue,
    searchedTodos,
    completedTodos,
  } = state;
  
  const {
    addTodo,
    deleteTodo,
    completeTodo,
    setOpenModal,
    setSearchValue,
    sincronizeTodos,
  } = stateUpdaters;
  
  return (
    <React.Fragment>
      <Navbar/>
    
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
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={
          (searchText) => 
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="h6" color="text.secondary">
                No hay resultados para {searchText}
              </Typography>
            </Box>
        }
      >
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
  );
}

export default App;
