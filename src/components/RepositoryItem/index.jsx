import { View, StyleSheet } from 'react-native';
import theme from '../../theme';
import Description from './Description';
import Stats from './Stats';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.repositoryItemBackground,
  }
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Description item={item} />
      <Stats item={item} />
    </View>
  );
};

export default RepositoryItem;