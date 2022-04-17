import RepositoryItem from '../RepositoryItem';
import { useParams } from 'react-router-native';
import useRepository from '../../hooks/useRepository';
import { FlatList } from 'react-native';
import { ItemSeparator } from '../RepositoryList/RepositoryListContainer';
import ReviewItem from './ReviewItem';
import { View } from 'react-native-web';

const RepositoryInfo = ({ repository }) => {
  return (
    <View>
      <RepositoryItem item={repository} show={true} />
      <ItemSeparator />
    </View>
  );
};

const SingleView = () => {
  const { id } = useParams();
  const { loading, error, repository } = useRepository(id);

  if (loading) {
    return <></>;
  }
  if (error) {
    return console.log('Error', error);
  }
  const reviewNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleView;