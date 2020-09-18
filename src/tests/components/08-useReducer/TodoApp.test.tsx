import React from 'react';
import { shallow, mount } from 'enzyme';
import TodoApp from '../../../components/08-useReducer/TodoApp';
import { dummyTodo } from '../../fixtures/dummyTodos';
import { act } from '@testing-library/react';

describe('TodoApp tests', () => {

  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn();

  test('TodoApp should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('TodoApp should add newTodo', () => {

    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(dummyTodo[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')(dummyTodo[1]);
    });
    expect(wrapper.find('h1').text().trim()).toBe('Todo App 2');
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test('TodoApp should delete Todo', () => {

    wrapper.find('TodoAdd').prop('handleAddTodo')(dummyTodo[0]);
    wrapper.find('TodoList').prop('handleDelete')(dummyTodo[0].id);
    expect(wrapper.find('h1').text().trim()).toBe('Todo App 0');


  });


});
