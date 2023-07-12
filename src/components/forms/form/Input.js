import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <ErrorMessage name={name} component={TextError} />
      <Field id={name} name={name} {...rest} />
    </div>
  );
}

export default Input;
