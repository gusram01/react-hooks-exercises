import React, { useEffect } from 'react';
import './effects.css';
import { useForm } from '../../hooks/useForm';
import { ChangeEvent } from 'react';

const FomrWithCustomHook = () => {

  const { values: formValues, handleInputChange } = useForm();

  const { name, email, password } = formValues;

  useEffect(() => console.log('email change'), [email]);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form with Custom Hook</h1>
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
      <div>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="****"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
};

export default FomrWithCustomHook;