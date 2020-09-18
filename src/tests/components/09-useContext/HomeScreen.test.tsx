import React from 'react';
import { shallow, mount } from 'enzyme';
import HomeScreen from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { User, Context } from '../../../components/09-useContext/UserContext';

describe('HomeScreen tests', () => {

  const user: User = {
    id: 1,
    name: 'gus',
    email: 'g@g.com',
  }

  const context: Context = {
    user
  }

  console.log(user);
  const wrapper = mount(
    <UserContext.Provider value={context} >
      <HomeScreen />
    </UserContext.Provider >
  );
  test('HomeScree should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
