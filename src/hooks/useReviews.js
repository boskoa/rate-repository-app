import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useReviews = (rev) => {
  const { data, error, loading, fetchMore } = useQuery(ME, {
    variables: rev,
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    console.log('You have reached the end of the list');

    fetchMore({
      variables: {
        after: data.me.reviews.pageInfo.endCursor,
        ...rev,
      },
    });
  };

  if (loading) {
    return <></>;
  }

  const reviews = data?.me.reviews;
  console.log('Reviews', reviews.edges);

  return { reviews, error, loading, fetchMore: handleFetchMore };
};

export default useReviews;