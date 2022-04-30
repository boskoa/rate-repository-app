import  { View, StyleSheet } from 'react-native';
import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.repositoryItemBackground,
    padding: theme.paddings.flexContainer
  },
  lesserContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: theme.paddings.flexContainer
  },
  items: {
    flexGrow: 0,
    paddingBottom: 5,
  },
  rating: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: theme.colors.button,
    borderRadius: 20,
    textAlign: 'center',
  },
  button: {
    flexGrow: 1,
    borderRadius: 3,
    marginRight: theme.paddings.flexContainer,
    padding: theme.paddings.flexContainer,
    textAlign: 'center'
  }
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text
          style={ { color: theme.colors.button, margin: 'auto' } }
          fontSize="subheading"
          fontWeight="bold"
        >{review.rating}</Text>
      </View>
      <View style={styles.lesserContainer}>
        <Text
          style={styles.items}
          color="primary"
          fontSize="subheading"
          fontWeight="bold"
        >{review.user.username}</Text>
        <Text style={styles.items} color="textSecondary">
          {new Date(review.createdAt).toLocaleDateString('de-DE')}
        </Text>
        <Text style={styles.items}>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;