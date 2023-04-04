import * as yup from 'yup';

export const schema = yup
  .object({
    email: yup
      .string()
      .required('Email is required')
      .email('Email must be a valid email'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Minimum 6 characters')
      .max(18, 'Maximum 18 characters'),
  })
  .required();
