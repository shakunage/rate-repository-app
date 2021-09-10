import { useQuery } from '@apollo/client';

import { LOGIN_STATUS } from '../graphql/queries';

const useRepositories = () => {

  const { data, error, loading } = useQuery(LOGIN_STATUS, {
    fetchPolicy: 'cache-and-network',
  });

  const status = data;

  if (error) {
    console.log("error:" + error);
  }

  return { status, loading, refetch: useQuery(LOGIN_STATUS)};
};

export default useRepositories;