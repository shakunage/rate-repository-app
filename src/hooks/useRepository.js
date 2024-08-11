import { useQuery } from '@apollo/client';

import { SINGLE_REPO } from '../graphql/queries';

const useRepository = (id) => {

  console.log("useRepository called with: " + id);

  const { data, error, loading } = useQuery(SINGLE_REPO, {
    variables: { id }, });

  const repository = data;

  if (error) {
    console.log("error for useRepository: " + error);
  }

  return { repository, loading, refetch: useQuery(SINGLE_REPO, {variables: { id }})};
};

export default useRepository;