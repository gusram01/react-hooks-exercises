import React from 'react';
import { shallow } from 'enzyme';
import TodoAdd from '../../../components/08-useReducer/TodoAdd';

describe('TodoAdd tests', () => {
  const handleAddTodo = jest.fn();

  const wrapper = shallow(
    <TodoAdd
      handleAddTodo={handleAddTodo}
    />
  );

  test('TodoAdd should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('shouldnt called handleAddTodo ', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');
    // type Error, don't affect test
    //@ts-expect-error
    formSubmit({ preventDefault() { } });
    expect(handleAddTodo).not.toHaveBeenCalled();
  });

  test('handleAddTodo should have been called', () => {
    const value = 'Learn React';
    const input = wrapper.find('input');
    input.simulate('change', { target: { value, name: 'description' } });
    const formSubmit = wrapper.find('form').prop('onSubmit');
    // type Error, don't affect test
    //@ts-expect-error
    formSubmit({ preventDefault() { } });
    expect(handleAddTodo).toHaveBeenCalled();
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      done: false,
      desc: value
    });
    expect(wrapper.find('input').prop('value')).toBe('');
  })

});