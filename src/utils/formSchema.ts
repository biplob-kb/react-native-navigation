import * as Yup from 'yup';

// login form schema
export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

// register form schema
export const registerSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  city: Yup.string().required('City is required'),
  country: Yup.string().required('Country is required'),
  phone: Yup.string().required('Phone is required'),
});
