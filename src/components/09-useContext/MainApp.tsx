import React, { useState } from 'react';
import AppRouter from './AppRouter';
import { UserContext } from './UserContext';

const MainApp = () => {

  // const user = {
  //   id: 1234,
  //   name: 'Gus',
  //   email: 'd@d.com'
  // }
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  )
};

export default MainApp;