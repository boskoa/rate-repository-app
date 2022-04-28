import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderBy, searchBy) => {
  let sortCriteria;
  switch(orderBy) {
  case 'highest rating':
    sortCriteria = {
      orderBy: 'RATING_AVERAGE', orderDirection: 'DESC'
    };
    break;
  case 'lowest rating':
    sortCriteria = {
      orderBy: 'RATING_AVERAGE', orderDirection: 'ASC'
    };
    break;
  default:
    sortCriteria = { orderBy: 'CREATED_AT' };
  }

  const queryVariables = { ...sortCriteria, searchKeyword: searchBy, first: 5 };

  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
    variables: queryVariables,
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    console.log('You have reached the end of the list');

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...queryVariables,
      },
    });
  };

  if (loading) {
    return <></>;
  }

  const repositories = data?.repositories;
  console.log('Repositories', repositories.edges);

  return { repositories, error, loading, fetchMore: handleFetchMore };
};

export default useRepositories;