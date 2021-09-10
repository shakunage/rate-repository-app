import React from 'react';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import theme from '../theme';
import Text from './Text';
import useSignIn from '../hooks/useSignIn';

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

const styles = StyleSheet.create({
  signInButton: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.colors.auxiliary,
    padding: 10,
    margin: 10,
    borderRadius: 3,
    alignItems: "center",
  },
  field: {
    display: 'flex',
    flexGrow: 1,
    padding: 10,
    margin: 10,
    borderRadius: 3,
    backgroundColor: theme.colors.cardColor,
  }
});

const SignInForm = ({ onSubmit }) => {

  return (
    <View>
      <FormikTextInput style={styles.field} name="username" placeholder="Username..." />
      <FormikTextInput style={styles.field} name="password" placeholder="Password..." secureTextEntry={true} />
      <Pressable onPress={onSubmit} style={styles.signInButton}>
        <Text color="subheading" fontSize="subheading" fontWeight="bold">Sign In</Text>
      </Pressable>
    </View>
  );
};

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