import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../../../components/08-useReducer/TodoList';
import { dummyTodo } from '../../fixtures/dummyTodos';

describe('TodoList tests', () => {

  const handleToggle = jest.fn();
  const handleDelete = jest.fn();
  const wrapper = shallow(
    <TodoList
      todos={dummyTodo}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  )

  test('TodoLists should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('TodoLists should have 2 items', () => {
    expect(wrapper.find('TodoListItem').length).toBe(dummyTodo.length);
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
  });


});