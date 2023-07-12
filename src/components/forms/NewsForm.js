import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormikControl from './Formik/FormikControl';
import './form/forms.css';

function NewsForm() {
  const initialValues = {
    email: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
  });
  const onSubmit = (values) => {
    console.log('Subscribed ', values);
  };
  return (
    <>
      <div className="">
        <div className="login-form">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(formik) => {
              return (
                <Form>
                  <FormikControl
                    control="input"
                    type="email"
                    name="email"
                    placeholder="Email address"
                  />
                  <button className="btn" type="submit">
                    Subscribe
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

export default NewsForm;
