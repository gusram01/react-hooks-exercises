import React from 'react';
import TodoListItem from '../../../components/08-useReducer/TodoListItem';
import { shallow, ShallowWrapper } from 'enzyme';
import { dummyTodo } from '../../fixtures/dummyTodos';


describe('TodoListItem tests', () => {
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();
  const wrapper = shallow(
    <TodoListItem
      todo={dummyTodo[0]}
      i={1}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  );

  test('TodoListItem should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('handleDelete should been called', () => {
    wrapper.find('.btn-danger').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(1);
  });

  test('handleToggle should been called', () => {
    wrapper.find('p').simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(1);
  });

  test('TodoListItem should render the todo inner  text correctly', () => {
    expect(wrapper.find('p').text()).toBe('2.- Learn React');
  });

  test('Should change class style if done is checked', () => {
    const todo = dummyTodo[0];
    todo.done = true;
    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        i={1}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    );
    expect(wrapper.find('p').hasClass('complete')).toBe(true);
  });

});