import RepositoryItem from './RepositoryItem';
import { useParams } from 'react-router-native';

const SingleView = () => {
  const { userId } = useParams();
  console.log('PARAM', userId);
  return (
    <RepositoryItem item={userId} />
  );
};

export default SingleView;