import { Form, Formik } from 'formik';
import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { LoginContext } from '../context/login-context';
import FormikControl from './Formik/FormikControl';
import './form/forms.css';

function SellProductForm() {
  const {} = useContext(LoginContext);
  const navigate = useNavigate();

  const checkboxOptions = [
    { key: '$', value: '$' },
    { key: '€', value: '€' },
  ];

  const initialValues = {
    title: '',
    description: '',
    price: '',
    currency: '',
  };
  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    price: Yup.number().required('Required'),
    currency: Yup.string().required('Required'),
  });
  const onSubmit = (values) => {
    console.log('Form Data: ', values);

    navigate('/');
  };
  return (
    <>
      <div className="App">
        <div className="login-form">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(formik) => {
              return (
                <Form className="login">
                  <h1 className="form-h1">Sell Product</h1>

                  <FormikControl
                    control="input"
                    type="text"
                    label="Title"
                    name="title"
                  />
                  <FormikControl
                    control="textarea"
                    type="text"
                    label="Description"
                    name="description"
                  />
                  <FormikControl
                    control="input"
                    type="number"
                    label="Price"
                    name="price"
                  />
                  <FormikControl
                    control="radio"
                    name="currency"
                    type="text"
                    label="Currency"
                    options={checkboxOptions}
                  />

                  <button
                    className="submit-btn"
                    type="submit"
                    disabled={!formik.isValid}
                  >
                    Submit
                  </button>
                  <button className="btn cancel" onClick={() => navigate('/')}>
                    Cancel
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default SellProductForm;
