import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <ErrorMessage name={name} component={TextError} />
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
    </div>
  );
}

export default Select;
