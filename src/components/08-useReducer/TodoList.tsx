import React from 'react';
import { TodoState } from './TodoReducer';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

interface Props {
  todos: TodoState[];
  handleToggle: (id: number) => void;
  handleDelete: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ todos, handleToggle, handleDelete }) => {

  return (
    <ul className="list-group list-group-flush">
      {
        todos.map((todo, i) =>
          <TodoListItem
            todo={todo}
            i={i}
            key={todo.id}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        )
      }
    </ul>
  );

};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default TodoList;
