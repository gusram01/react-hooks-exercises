import React, { useCallback, useState } from 'react';
import './memorize.css';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  // const increment = () => {
  //   setCounter(counter + 1)
  // };

  const increment = useCallback((num = 1) => {
    // setCounter(counter + 1)
    // erase dependancy from counter
    setCounter(prev => prev + num)
  }, [setCounter])

  return (
    <>
      <h1>Callback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />

    </>
  );
};

export default CallbackHook;