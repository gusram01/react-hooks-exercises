import React from 'react';
import { mount } from 'enzyme';
import AppRouter from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('AppRouter tests', () => {
  const dummyUser = {
    id: 101023,
    name: 'Gus'
  };
  const wrapper = mount(
    <UserContext.Provider value={dummyUser}>

      <AppRouter />
    </UserContext.Provider>
  );

  test('AppRouter should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
