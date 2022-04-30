import { FlatList, Alert } from 'react-native';
import { ItemSeparator } from './RepositoryList/RepositoryListContainer';
import UserReview from './UserReview';
import useReviews from '../hooks/useReviews';
import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';
import { ME } from '../graphql/queries';

const UserReviews = () => {
  const { loading, error, reviews, fetchMore } = useReviews({
    includeReviews: true
  });

  const onEndReach = () => {
    fetchMore();
  };

  if (loading) {
    return <></>;
  }
  if (error) {
    return console.log('Error', error);
  }
  const reviewNodes = reviews
    ? reviews.edges.map((edge) => edge.node)
    : [];

  const [deleteReview] = useMutation(DELETE_REVIEW);

  const alert = (id) =>
    Alert.alert(
      'Delete the review',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK',
          onPress: () => deleteReview({
            variables: { deleteReviewId: id },
            refetchQueries: [
              {
                query: ME,
                variables: { includeReviews: true }
              }
            ]
          })
        }
      ]
    );

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <UserReview review={item} alert={alert} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default UserReviews;