import React, { ChangeEvent, useEffect } from 'react';
import './effects.css';
import { useState } from 'react';
import Message from './Message';

const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log('hey');
  }, []);
  useEffect(() => {
    // console.log('formState Change');
  }, [formState]);
  useEffect(() => {
    // console.log('email Change');
  }, [email]);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    });
  };

  return (
    <>
      <h1>UseEffect</h1>
      <hr />
      <div>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="email@something.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {(name === '123') && <Message />}
    </>
  );
};

export default SimpleForm;