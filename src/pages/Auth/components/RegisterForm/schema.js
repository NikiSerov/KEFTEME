import * as yup from 'yup';

export const schema = yup
  .object({
    email: yup
      .string()
      .email('Email must be a valid email')
      .required('Email is required'),
    firstName: yup
      .string()
      .required('First name is required')
      .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
    lastName: yup
      .string()
      .required('Last name is required')
      .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
    password: yup
      .string()
      .min(6, 'Minimum 6 characters')
      .max(18, 'Maximum 18 characters')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .min(6, 'Minimum 6 characters')
      .max(18, 'Maximum 18 characters')
      .required('Password confirm is required')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })
  .required();
