import  { View, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../theme';
import Text from './Text';
import ReviewItem from './SingleView/ReviewItem';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.repositoryItemBackground,
    padding: theme.paddings.flexContainer
  },
  button: {
    flexGrow: 1,
    borderRadius: 3,
    marginRight: theme.paddings.flexContainer,
    padding: theme.paddings.flexContainer,
    textAlign: 'center'
  }
});

const UserReview = ({ review, alert }) => {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <ReviewItem review={review} />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => navigate(`/repository/${review.repository.id}`)}
          style={[styles.button, { backgroundColor: theme.colors.button }]}
        >
          <Text style={{ color: '#ffffff' }} fontWeight="bold">
            View repository
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert(review.id)}
          style={[styles.button, { backgroundColor: theme.colors.error }]}
        >
          <Text style={{ color: '#ffffff' }} fontWeight="bold">
            Delete review
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserReview;