import Stat from './Stat';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexGrow: 0
  }
});

const Stats = ({ item }) => {
  return (
    <View style={styles.container}>
      <Stat text="Stars" value={item.stargazersCount} />
      <Stat text="Forks" value={item.forksCount} />
      <Stat text="Reviews" value={item.reviewCount} />
      <Stat text="Rating" value={item.ratingAverage} />
    </View>
  );
};

export default Stats;