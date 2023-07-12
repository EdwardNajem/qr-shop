import { Form, Formik } from 'formik';
import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { LoginContext } from '../context/login-context';
import FormikControl from './Formik/FormikControl';
import './form/forms.css';

function RegistrationForm() {
  const { SubmitSignup } = useContext(LoginContext);
  const navigate = useNavigate();
  const options = [
    { key: 'Email', value: 'emailmoc' },
    { key: 'Telephone', value: 'telephonemoc' },
  ];

  const initialValues = {
    username: '',
    password: '',
    confirmPassword: '',
    modeofContact: '',
    phone: '',
    email: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
    modeofContact: Yup.string().required('Required'),
    phone: Yup.string().when('modeofContact', {
      is: 'telephonemoc',
      then: () => Yup.string().required('Required'),
    }),
    email: Yup.string().email('Invalid email format').required('Required'),
  });

  const onSubmit = (values) => {
    console.log('Form Data: ', values);
    if (values.modeofContact === "telephonemoc") {
    SubmitSignup(values.email, values.username, values.password, values.phone);
    } else {
      SubmitSignup(values.email, values.username, values.password, values.email);
    }
    navigate('/login');
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <div className="App">
              <Form className="login">
                <h1 className="form-h1">Sign Up</h1>
                <FormikControl
                  control="input"
                  type="email"
                  label="Email"
                  name="email"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="Username"
                  name="username"
                />
                <FormikControl
                  control="input"
                  type="password"
                  label="Password"
                  name="password"
                />
                <FormikControl
                  control="input"
                  type="password"
                  label="Confirm Password"
                  name="confirmPassword"
                />
                <FormikControl
                  control="radio"
                  name="modeofContact"
                  label="Mode of Contact"
                  options={options}
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="Phone"
                  name="phone"
                />

                <button
                  className="submit-btn"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Submit
                </button>
                <div className="create-account">
                  <p className="create-h2">Already Have An Account?</p>
                  <NavLink to="/login">Sign In</NavLink>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </>
  );
}

export default RegistrationForm;
