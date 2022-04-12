import { StyleSheet } from 'react-native';
import { useField } from 'formik';
import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
  inputText: {
    borderWidth: 5,
    borderColor: 'black',
    padding: 10,
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        placeholder={`Enter ${name}`}
        value={field.value}
        error={showError}
        style={styles.inputText}
        { ...props }
      />
      {showError && <Text stye={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;