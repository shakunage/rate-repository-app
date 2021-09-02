import React from 'react';
import { View, TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  errorField: {
    display: 'flex',
    flexGrow: 1,
    padding: 10,
    margin: 10,
    borderRadius: 3,
    backgroundColor: theme.colors.cardColor,
    borderColor: theme.colors.errorColor, 
    borderWidth: 1
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];
  try {
    if (error) {
      return (
        <View >
      <NativeTextInput style={styles.errorField} {...props} />
    </View>
      ); 
    } else 
    return (
    <View style={styles}>
      <NativeTextInput style={textInputStyle} {...props} />
    </View>
    );
  } catch {
    console.log("Error. " + error);
  }
};

export default TextInput;