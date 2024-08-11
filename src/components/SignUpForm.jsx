import React from 'react';
import FormikTextInput from './FormikTextInput';
import { View, Pressable, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  submitButton: {
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

const SignUpForm = ({ onSubmit }) => {

  return (
    <View>
      <FormikTextInput style={styles.field} name="username" placeholder="Username..." />
      <FormikTextInput style={styles.field} name="password" placeholder="Password..." />
      <FormikTextInput style={styles.field} name="passconfirm" placeholder="Password confirmation..." />
      <Pressable onPress={onSubmit} style={styles.submitButton}>
        <Text color="subheading" fontSize="subheading" fontWeight="bold">Sign up</Text>
      </Pressable>
    </View>
  );
};


export default SignUpForm;