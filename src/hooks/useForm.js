import { useState } from 'react';
import { formatCPF } from '../helpers/formatCPF';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]:
        target.name === 'rCPF' ? formatCPF(target.value) : target.value,
    });
  };

  return [values, handleInputChange, reset];
};
