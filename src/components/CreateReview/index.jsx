import CreateReviewContainer from './CreateReviewContainer';
import useCreateReview from '../../hooks/useCreateReview';
import { useNavigate } from 'react-router-native';

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const ownerName = values.repositoryOwnerName;
    const repositoryName = values.repositoryName;
    const rating = parseInt(values.rating);
    const text = values.review;

    try {
      const data = await createReview({ ownerName, repositoryName, rating, text });
      console.log('Data:', data);
      navigate(`/repository/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log('Error', e);
    }
  };

  return (
    <CreateReviewContainer onSubmit={onSubmit} />
  );
};

export default CreateReview;