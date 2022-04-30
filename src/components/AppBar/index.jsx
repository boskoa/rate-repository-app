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
  },
  signedFlexItem: {
    marginLeft: 20
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
          ? <View style={styles.container}>
            <AppBarTab
              style={[styles.flexItem, styles.signedFlexItem]}
              text="Create a review"
              onPress={() => console.log('Create a review')}
              link="/create-review"
            />
            <AppBarTab
              style={[styles.flexItem, styles.signedFlexItem]}
              text="My reviews"
              link="/my-reviews"
            />
            <AppBarTab
              style={[styles.flexItem, styles.signedFlexItem]}
              text="Sign out"
              onPress={logout}
              link="/"
            />
          </View>
          : <View style={styles.container}>
            <AppBarTab
              style={[styles.flexItem, styles.signedFlexItem]}
              text="Sign in"
              link="/signin"
            />
            <AppBarTab
              style={[styles.flexItem, styles.signedFlexItem]}
              text="Sign up"
              onPress={() => console.log('Sign up')}
              link="/signup"
            />
          </View>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;