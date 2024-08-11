import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Formik } from 'formik';
import SignInForm from '../../components/SignInForm';


describe('SignIn', () => {
    describe('SignInContainer', () => {
      it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {


        const onSubmit = jest.fn();

        const SignInContainer = ({ onSubmit }) => {

            const initialValues = {
                username: '',
                password: '',
              };
            
            return (
                <Formik onSubmit={onSubmit} initialValues={initialValues}>
                {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
                </Formik>
              );
        };

        const { debug, getByTestId } = render(<SignInContainer onSubmit={onSubmit}/>);

        debug();
        
        fireEvent.changeText(getByTestId('usernameField'), 'kalle');
        fireEvent.changeText(getByTestId('passwordField'), 'password');
        fireEvent.press(getByTestId('submitButton'));

        await waitFor(() => {
            expect(onSubmit.mock.calls[0][0]).toEqual({
                username: 'kalle',
                password: 'password',
              });
        });

      });
    });
  });
  