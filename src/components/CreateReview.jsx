import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import useCreateReview from '../hooks/useCreateReview';
import CreateReviewForm from './CreateReviewForm';
import { useNavigate } from 'react-router-native';


const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .min(0)
    .max(100)
    .required('A rating between 0 and 100 is required')
});

const CreateReview = () => {

  const [createReview] = useCreateReview();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    console.log('submitted!');
    try {
      const { data } = await createReview({ ownerName, repositoryName, rating, text });
      console.log(data);
      navigate(`/repos/${data.createReview.repositoryId}`, { replace: true });
      
    } catch (e) {
      console.log("error is :" + e);
    }
  };


  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default CreateReview; 