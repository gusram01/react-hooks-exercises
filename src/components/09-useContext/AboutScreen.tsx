import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const AboutScreen = () => {

  const { user, setUser } = useContext(UserContext);

  const handleCLick = () => setUser!({});


  return (
    <>
      <h1>About Page</h1>
      <hr />


      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
      <button
        className="btn btn-warning"
        onClick={handleCLick}
      >
        LogOut
      </button>
    </>
  );
};

export default AboutScreen;
