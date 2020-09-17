import React from 'react';
import { shallow } from 'enzyme';
import { useFetch } from '../../../hooks/useFetch';
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('MultipleCustomHooks tests', () => {

  useCounter.mockReturnValue({
    counter: 10,
    increment: () => { return 11 }
  });

  test('MultipleCustomHooks should render correctly', () => {
    useFetch.mockReturnValue({
      data: [],
      loading: true,
      error: null
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render info', () => {
    useFetch.mockReturnValue({
      data: [{
        author: 'Gus',
        quote: 'Hello'
      }],
      loading: false,
      error: null
    });
    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.mb-0').text().trim()).toBe('Hello');
    expect(wrapper.find('footer').text().trim()).toBe('Gus');
  });



});