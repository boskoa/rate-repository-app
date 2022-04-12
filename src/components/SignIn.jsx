import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import { Pressable } from 'react-native';
import Text from './Text';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.repositoryItemBackground
  },
  item: {
    margin: 10,
    padding: theme.paddings.buttons,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.paddings.buttons,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: theme.colors.button,
  },
});

const initialValues = {
  username: '',
  password: ''
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput style={styles.item} name="username" />
      <FormikTextInput style={styles.item} name="password" secureTextEntry={true} />
      <Pressable style={[styles.button, styles.item]} onPress={onSubmit}>
        <Text style={{ color: '#ffffff' }} fontWeight="bold">Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    const username = values.username;
    const password = values.password;

    console.log(username, password);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;