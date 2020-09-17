import React from 'react';
import { shallow } from 'enzyme';
import RealExampleRef from '../../../components/04-useRef/RealExampleRef';

describe('RealExampleRef tests', () => {
  const wrapper = shallow(<RealExampleRef />)

  test('RealExampleRef should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render MultipleCustomHooks correctly', () => {
    wrapper.find('.btn').simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });
});
