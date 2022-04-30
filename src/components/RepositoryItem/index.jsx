import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import theme from '../../theme';
import Description from './Description';
import Stats from './Stats';
import Text from '../Text';
import * as Linking from 'expo-linking';


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.repositoryItemBackground,
  },
  button: {
    flexGrow: 1,
    backgroundColor: theme.colors.button,
    borderRadius: 3,
    margin: theme.paddings.flexContainer,
    padding: theme.paddings.flexContainer,
    textAlign: 'center'
  }
});

const RepositoryItem = ({ item, show }) => {
  const handleTouch = () => {
    console.log('URL', item.url);
    Linking.openURL(item.url);
  };

  return (
    <View style={styles.container}>
      <Description item={item} />
      <Stats item={item} />
      {
        show && (
          <TouchableOpacity
            onPress={handleTouch}
            style={styles.button}
          >
            <Text style={{ color: '#ffffff' }} fontWeight="bold">
              Open in GitHub
            </Text>
          </TouchableOpacity>
        )
      }
    </View>
  );
};

export default RepositoryItem;