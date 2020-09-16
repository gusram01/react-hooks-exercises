import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LoginScreen = () => {

  const { user, setUser } = useContext(UserContext);
  const dummyUser = {
    id: 101023,
    name: 'Gus'
  };
  return (
    <>
      <h1>Login Page</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={() => setUser!(dummyUser)}
      >
        Login
      </button>

      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
    </>
  );
};

export default LoginScreen;
