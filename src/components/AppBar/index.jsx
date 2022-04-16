import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../../theme';
import { useQuery } from '@apollo/client';
import { ME } from '../../graphql/queries';
import useAuthStorage from '../../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

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
  const { data } = useQuery(ME);
  const authStorage = useAuthStorage();
  const client = useApolloClient();

  const logout = async() => {
    await authStorage.removeAccessToken();
    await client.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.contentContainerStyle}>
        <AppBarTab style={styles.flexItem} text="Repositories" link="/" />
        {data?.me
          ? <AppBarTab style={styles.flexItem} text="Log out" onPress={logout} link="/" />
          : <AppBarTab style={styles.flexItem} text="Sign in" link="/signin" />
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;