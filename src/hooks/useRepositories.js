import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  const repositories = data;

  if (error) {
    console.log("error:" + error);
  }

  return { repositories, loading, refetch: useQuery(GET_REPOSITORIES)};
};

export default useRepositories;