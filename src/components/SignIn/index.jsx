import SignInContainer from './SignInContainer';
import useSignIn from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const username = values.username;
    const password = values.password;

    try {
      const data = await signIn({ username, password });
      console.log('Data:', data);
      navigate('/');
    } catch (e) {
      console.log('Error', e);
    }
    //username && password && console.log(username, password);
  };

  return (
    <SignInContainer onSubmit={onSubmit} />
  );
};

export default SignIn;