import { useField } from 'formik';
import TextInput from './TextInput';
import Text from './Text';

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
        { ...props }
      />
      {showError && <Text color="error">{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;