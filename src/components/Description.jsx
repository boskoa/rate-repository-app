import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { TouchableOpacity } from 'react-native-web';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
  images: {
    borderRadius: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  buttons: {
    backgroundColor: theme.colors.button,
    borderRadius: 3,
    padding: theme.paddings.buttons,
  }
});

const Description = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.images}
        source={{ uri: item.ownerAvatarUrl, width: 50, height: 50 }}
      />
      <View style={styles.lesserContainer}>
        <Text
          color="primary"
          fontSize="subheading"
          fontWeight="bold"
          style={styles.items}
        >{item.fullName}</Text>
        <Text color="textSecondary" style={styles.items}>{item.description}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.items, styles.buttons]}
          >
            <Text style={{ color: '#ffffff' }} fontWeight="bold">{item.language}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Description;