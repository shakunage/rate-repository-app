import React from 'react';
import FormikTextInput from './FormikTextInput';
import { View, Pressable, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';

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
      <FormikTextInput style={styles.field} testID="usernameField" name="username" placeholder="Username..." />
      <FormikTextInput style={styles.field} testID="passwordField" name="password" placeholder="Password..." secureTextEntry={true} />
      <Pressable onPress={onSubmit} style={styles.signInButton} testID="submitButton">
        <Text color="subheading" fontSize="subheading" fontWeight="bold">Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm; 