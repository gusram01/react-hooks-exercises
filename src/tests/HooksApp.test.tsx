import React from 'react';
import { shallow } from 'enzyme';
import HooksApp from '../components/HooksApp';

describe('HooksApp tests', () => {

  test('HooksApp should render correctly', () => {
    const wrapper = shallow(<HooksApp />);
    expect(wrapper).toMatchSnapshot();
  });

});
