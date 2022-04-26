import SignUpContainer from './SignUpContainer';
import useSignIn from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../graphql/mutations';

const SignUp = () => {
  const [signUp] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const username = values.username;
    const password = values.password;

    try {
      const { data } = await signUp({
        variables: {
          user: { username, password }
        }
      });
      console.log('Data:', data);

      if (data?.createUser) {
        const loggedUser = await signIn({ username, password });
        if (loggedUser) {
          navigate('/');
        }
      }
    } catch (e) {
      console.log('Error', e);
    }
    username && password && console.log('Sign up', username, password);
  };

  return (
    <SignUpContainer onSubmit={onSubmit} />
  );
};

export default SignUp;