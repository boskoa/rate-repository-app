import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 3,
  },
  errorInput: {
    borderWidth: 1,
    borderColor: theme.colors.error,
  }
});

// eslint-disable-next-line no-unused-vars
const TextInput = ({ error, style, ...props }) => {
  const textInputStyle = [
    styles.textInput,
    style,
    !!error === true && styles.errorInput
  ];

  return (
    <NativeTextInput style={textInputStyle} {...props} />
  );
};

export default TextInput;