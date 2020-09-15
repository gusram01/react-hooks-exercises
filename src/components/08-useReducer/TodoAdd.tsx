import React from 'react'
import { useForm } from '../../hooks/useForm';
import { TodoState } from './TodoReducer';

interface Props {
  handleAddTodo: (newTodo: TodoState) => void;
}

const TodoAdd: React.FC<Props> = ({ handleAddTodo }) => {
  const { values, handleInputChange, reset } = useForm({
    description: ''
  });

  const { description } = values;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (description!.trim().length <= 2) {
      return;
    }

    const newTodo: TodoState = {
      id: new Date().getTime(),
      desc: description!,
      done: false
    };
    handleAddTodo(newTodo);
    reset();
  }

  return (
    <>
      <h4>Add Todo</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Enter todo"
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-outline-primary mt-1 btn-block"
        >
          Add
            </button>
      </form>
    </>
  )
}

export default TodoAdd;
