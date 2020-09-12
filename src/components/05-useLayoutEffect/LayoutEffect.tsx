import React, { useLayoutEffect, useRef, useState } from 'react';
import './layout.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const { quote } = data.length > 0 && data[0];

  const paragraph = useRef<HTMLParagraphElement>(null);
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    return setBoxSize(paragraph.current!.getBoundingClientRect());
  }, [quote])

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p
          className="mb-0"
          ref={paragraph}
        >
          {quote}
        </p>
      </blockquote>
      <pre>
        {JSON.stringify(boxSize, null, 3)}
      </pre>

      <button className="btn btn-primary" onClick={increment}>Next quote</button>
    </div >
  );
};

export default LayoutEffect;