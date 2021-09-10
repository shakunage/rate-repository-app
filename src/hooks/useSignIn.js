import { useMutation, useApolloClient } from '@apollo/client';

import { AUTHORIZE } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';
import { useHistory } from 'react-router-native';

const useSignIn = () => {
    const authStorage = useAuthStorage();
    const [mutate, result] = useMutation(AUTHORIZE);
    const history = useHistory();
    const apolloClient = useApolloClient();

  
    const signIn = async ({ username, password }) => {
        const { data } = await mutate({ variables: {credentials: {username: username, password: password },} });
        await authStorage.setAccessToken(data.authorize.accessToken);
        apolloClient.resetStore();
        history.push('/');
        return { data };
    };
  
    return [signIn, result];
  };

  export default useSignIn;
