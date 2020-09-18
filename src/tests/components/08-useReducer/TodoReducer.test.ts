import { todoReducer } from '../../../components/08-useReducer/TodoReducer';
import { dummyTodo } from '../../fixtures/dummyTodos';

describe('TodoReucer Tests', () => {

  test('todoReducer should return default state', () => {
    const state = todoReducer(dummyTodo, {});
    expect(state).toEqual(dummyTodo);
  });

  test('todoReducer should add new todo', () => {
    const newTodo = {
      id: 3,
      desc: '',
      done: false
    };

    const state = todoReducer(dummyTodo, { type: 'add', payload: newTodo });
    expect(state).toEqual([...dummyTodo, newTodo]);
  });

  test('todoReducer should delete todo', () => {
    const delTodo = {
      id: 1,
      desc: '',
      done: false
    }
    const state = todoReducer(dummyTodo, { type: 'delete', payload: delTodo });
    expect(state).toEqual([dummyTodo[1]]);
  });

  test('todoReducer should toggle todo.done', () => {
    const toggleTodo = {
      id: 2,
      desc: '',
      done: true
    };

    const state = todoReducer(dummyTodo, { type: 'toggle', payload: toggleTodo });
    expect(state[1].done).toBe(true);
  });

});