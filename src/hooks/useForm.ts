import { useState, ChangeEvent } from 'react';


interface Initial {

  name?: string;
  email?: string;
  password?: string;

}
export const useForm = (initialState = {
  name: '',
  email: '',
  password: ''
}) => {

  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value
    });
  };

  return { values, handleInputChange };
};
