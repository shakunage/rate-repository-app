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

const CreateReviewForm = ({ onSubmit }) => {

  return (
    <View>
      <FormikTextInput style={styles.field} name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput style={styles.field} name="repositoryName" placeholder="Repository name" />
      <FormikTextInput style={styles.field} name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput style={styles.field} multiline={true} name="text" placeholder="Review" />
      <Pressable onPress={onSubmit} style={styles.submitButton}>
        <Text color="subheading" fontSize="subheading" fontWeight="bold">Create a review</Text>
      </Pressable>
    </View>
  );
};


export default CreateReviewForm;