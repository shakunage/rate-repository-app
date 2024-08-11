import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import useSignIn from '../hooks/useSignIn';
import SignInForm from './SignInForm';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
});

const SignIn = () => {

  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log('submitted!');
    try {
      const { data } = await signIn({ username, password });
      console.table(data);
    } catch (e) {
      console.log("error is :" + e);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn; 