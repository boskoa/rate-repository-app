import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  const { loading, error, data, fetchMore } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: id, first: 5 },
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    console.log('You have reached the end of the reviews list');

    fetchMore({
      variables: {
        after: data?.repository.reviews.pageInfo.endCursor,
        repositoryId: id,
        first: 8,
      },
    });
  };

  return { loading, error, repository: data?.repository, fetchMore: handleFetchMore };
};

export default useRepository;