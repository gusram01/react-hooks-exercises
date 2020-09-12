import React, { useRef } from 'react';
import './focus.css';

const FocusScreen = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  // console.log(ref);

  const handleClick = () => {

    const ele = inputRef.current;
    ele?.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Your name"
      />

      <button
        className="btn btn-outline-primary mt-5"
        onClick={handleClick}
      >
        Focus
      </button>
    </>


  );
};

export default FocusScreen;
