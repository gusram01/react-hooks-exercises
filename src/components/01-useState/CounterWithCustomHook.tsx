import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

const CounterWithCustomHook = () => {

  const { counter, increment, decrement, initial } = useCounter();

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />
      <button className="btn btn-secondary" onClick={increment}>+1</button>
      <button className="btn btn-primary" onClick={initial}>Reset</button>
      <button className="btn btn-secondary" onClick={decrement}>-1</button>
    </>

  );
};

export default CounterWithCustomHook;
