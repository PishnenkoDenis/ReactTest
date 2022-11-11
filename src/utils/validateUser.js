import * as Yup from 'yup';

const validateUser = () => Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter the email'),
  password: Yup.string()
    .required('Please enter the password'),
});

export default validateUser;
