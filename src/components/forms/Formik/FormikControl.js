import React from 'react';
import Checkbox from '../form/CheckBox';
import Input from '../form/Input';
import Radio from '../form/Radio';
import Select from '../form/Select';
import TextArea from '../form/TextArea';

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <TextArea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'radio':
      return <Radio {...rest} />;
    case 'checkbox':
      return <Checkbox {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
