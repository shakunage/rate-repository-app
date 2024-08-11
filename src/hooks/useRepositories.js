import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortCondition, searchKeyword) => {

  const [sortField, sortOrder] = sortCondition == "latest"
    ? ["CREATED_AT", "DESC"]
    : sortCondition == "highestrated"
    ? ["RATING_AVERAGE", "DESC"]
    : sortCondition == "lowestrated"
    ? ["RATING_AVERAGE", "ASC"]
    : ["CREATED_AT", "DESC"];

  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
    variables: { sortField, sortOrder, searchKeyword }
  });

  const handleFetchMore = () => {

    if (!canFetchMore) {
      return;
    }
    
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        sortField, sortOrder, searchKeyword
      },
    });
  };

  const repositories = data;

  if (error) {
    console.log("error:" + error);
  }

  return { 
    repositories,
    loading,
    fetchMore: handleFetchMore,
    refetch: useQuery(GET_REPOSITORIES, {
    variables: { sortField, sortOrder }
  }) };
};

export default useRepositories;