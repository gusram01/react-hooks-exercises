import React from 'react';
import { TodoState } from './TodoReducer';
import PropTypes from 'prop-types';

interface Props {
  todo: Partial<TodoState>;
  i: number;
  handleToggle: (id: number) => void;
  handleDelete: (id: number) => void;
}

const TodoListItem: React.FC<Props> = ({ todo, i, handleToggle, handleDelete }) => {

  return (
    <li
      key={todo.id}
      className="list-group-item"
    >
      <p
        className={`${todo.done && 'complete'}`}
        onClick={() => handleToggle(todo.id!)}
      >
        {i + 1}.- {todo.desc}
      </p>
      <button
        className="btn btn-danger"
        onClick={() => handleDelete(todo.id!)}
      >
        Delete todo
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default TodoListItem;
