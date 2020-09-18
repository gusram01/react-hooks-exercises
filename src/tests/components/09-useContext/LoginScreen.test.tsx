import React, { SetStateAction } from 'react';
import { mount } from 'enzyme';
import LoginScreen from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('LoginScreen tests', () => {
  const dummyUser = {
    id: 101023,
    name: 'Gus'
  };

  const wrapper = mount(
    <UserContext.Provider value={dummyUser}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test('LoginScreen should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  /**
   * Pending test, how could run test without jest.fn()
   */
  // test('should execute setUser with a correct argument', () => {

  //   wrapper.find('button').prop('onClick')();
  //   expect(setUser).toHaveBeenCalledWith(dummyUser);

  // });

});