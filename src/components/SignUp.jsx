import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import useCreateUser from '../hooks/useCreateUser';
import useSignIn from '../hooks/useSignIn';
import SignUpForm from './SignUpForm';
import { useNavigate } from 'react-router-native';

const initialValues = {
  username: '',
  password: '',
  passconfirm: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Owner name with a length between 1 and 30 is required'),
    password: yup
    .string()
    .min(5)
    .max(50)
    .required('Password with a lenght between 5 and 50 is required'),
    passconfirm: yup
    .string()
    .min(5)
    .max(50)
    .oneOf([yup.ref('password'), null])
    .required('Password confirmation must match')
});

const SignUp = () => {

  const [createUser] = useCreateUser();
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    const { username, password } = values;

    console.log('submitted!');
    try {
      const { data } = await createUser({ username, password });
      console.log(data);
      try {
        const { data } = await signIn({ username, password });
        console.table(data);
      } catch (e) {
        console.log("error is :" + e);
      }
      navigate(`/`, { replace: true });
      
    } catch (e) {
      console.log("error is :" + e);
    }
  };


  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUp; 