import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarColor
  },
  flexItem: {
    flexGrow: 0,
    color: theme.colors.appBarText,
    fontWeight: theme.fontWeights.bold,
  },
  contentContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
    padding: theme.paddings.flexContainer
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.contentContainerStyle}>
        <AppBarTab style={styles.flexItem} text="Repositories" link="/" />
        <AppBarTab style={styles.flexItem} text="Sign in" link="/signin" />
      </ScrollView>
    </View>
  );
};

export default AppBar;