import FormikTextInput from '../FormikTextInput';
import { Formik } from 'formik';
import { Pressable } from 'react-native';
import Text from '../Text';
import { View, StyleSheet } from 'react-native';
import theme from '../../theme';
import * as yup from 'yup';

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
  password: '',
  passwordConfirmation: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username required')
    .min(1)
    .max(30),
  password: yup
    .string()
    .required('Password required')
    .min(5)
    .max(50),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation required')
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput style={styles.item} name="username" placeholder="Username" />
      <FormikTextInput
        style={styles.item}
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <FormikTextInput
        style={styles.item}
        name="passwordConfirmation"
        placeholder="Password confirmation"
        secureTextEntry={true}
      />
      <Pressable style={[styles.button, styles.item]} onPress={onSubmit}>
        <Text style={{ color: '#ffffff' }} fontWeight="bold">Sign up</Text>
      </Pressable>
    </View>
  );
};

const SignUp = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUp;