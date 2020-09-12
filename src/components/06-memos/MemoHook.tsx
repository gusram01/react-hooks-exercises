import React, { useMemo, useState } from 'react';
import './memorize.css';
import { useCounter } from '../../hooks/useCounter';
import { heavyProcess } from '../../helpers/heavyProcess';

const MemorizeHook = () => {

  const { counter, increment } = useCounter(100);
  const [show, setShow] = useState(true);


  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>Counter: <small>{counter}</small> </h3>
      <hr />
      <p>{memoHeavyProcess}</p>
      <button
        className="btn btn-primary mt-3"
        onClick={increment}
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3 mt-3"
        onClick={() => { setShow(!show) }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  )
};

export default MemorizeHook;