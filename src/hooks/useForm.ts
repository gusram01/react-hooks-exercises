import { useState, ChangeEvent } from 'react';


interface Initial {
  name?: string;
  email?: string;
  password?: string;
  description?: string;
}

export const useForm = (initialState: Initial = {
  name: '',
  email: '',
  password: ''
}) => {

  const [values, setValues] = useState(initialState);

  const reset = () => setValues(initialState);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value
    });
  };

  return { values, handleInputChange, reset };
};
