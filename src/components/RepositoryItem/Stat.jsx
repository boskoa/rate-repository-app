import { View, StyleSheet } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});

const Stat = ({ text, value }) => {
  const roundedValue = (value) => {
    if (value > 999) {
      return `${Math.round(value / 1000 * 10) / 10}k`;
    }
    return value;
  };
  return (
    <View style={styles.container}>
      <Text testID="stat" color="primary" fontWeight="bold">{roundedValue(value)}</Text>
      <Text color="textSecondary">{text}</Text>
    </View>
  );
};

export default Stat;