import React, { useEffect, useReducer } from 'react';
import { TodoState, todoReducer } from './TodoReducer';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import './todo.css';

const initialState: TodoState[] = [];

const init = () => JSON.parse(localStorage.getItem('T0d05')!) || [];

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);


  useEffect(() => {
    localStorage.setItem('T0d05', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id: number) => {
    const todo: TodoState = {
      id,
      desc: '',
      done: false
    }

    const delTodo = {
      type: 'delete',
      payload: todo
    }

    dispatch(delTodo);

  };

  const handleToggle = (id: number) => {
    dispatch({
      type: 'toggle',
      payload: {
        id,
        desc: '',
        done: false
      }
    })
  };

  const handleAddTodo = (newTodo: TodoState) => {
    dispatch({
      type: 'add',
      payload: newTodo
    })
  };

  return (
    <>
      <h1>Todo App {(todos.length)}</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>

        <div className="col-5">
          <TodoAdd
            handleAddTodo={handleAddTodo}
          />
        </div>
      </div>
    </>
  );
};

export default TodoApp;