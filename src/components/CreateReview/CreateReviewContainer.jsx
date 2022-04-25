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
  repositoryOwnerName: '',
  repositoryName: '',
  rating: '',
  review: ''
};

const validationSchema = yup.object().shape({
  repositoryOwnerName: yup
    .string()
    .required('Repository owner name required'),
  repositoryName: yup
    .string()
    .required('Repository name required'),
  rating: yup
    .number()
    .required('Rating required')
    .min(0)
    .max(100),
  review: yup
    .string()
    .required('Review required'),
});

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.item}
        name="repositoryOwnerName"
        placeholder="Repository owner name required"
      />
      <FormikTextInput
        style={styles.item}
        name="repositoryName"
        placeholder="Repository name"
      />
      <FormikTextInput
        style={styles.item}
        name="rating"
        placeholder="Rating"
      />
      <FormikTextInput
        style={styles.item}
        name="review"
        placeholder="Review"
        multiline
      />
      <Pressable style={[styles.button, styles.item]} onPress={onSubmit}>
        <Text style={{ color: '#ffffff' }} fontWeight="bold">Send review</Text>
      </Pressable>
    </View>
  );
};

const CreateReview = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default CreateReview;