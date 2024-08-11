import { useMutation, useApolloClient } from '@apollo/client';

import { AUTHORIZE } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';
import { useNavigate } from 'react-router-native';

const useSignIn = () => {
    const authStorage = useAuthStorage();
    const [mutate, result] = useMutation(AUTHORIZE);
    const navigate = useNavigate();
    const apolloClient = useApolloClient();

  
    const signIn = async ({ username, password }) => {
        const { data } = await mutate({ variables: {credentials: {username: username, password: password },} });
        await authStorage.setAccessToken(data.authorize.accessToken);
        apolloClient.resetStore();
        navigate(`/}`, { replace: true });
        return { data };
    };
  
    return [signIn, result];
  };

  export default useSignIn;
