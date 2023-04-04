import * as yup from 'yup';
import { phoneRegExp } from './constants';

export const schema = yup
  .object({
    country: yup
      .string()
      .required('Country is required')
      .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
    city: yup.string().required('City is required'),
    street: yup.string().required('Street is required'),
    phoneNumber: yup
      .string()
      .required('Phone number is required')
      .matches(phoneRegExp, 'Phone number is not valid'),
    delivery: yup.string().required('Choose delivery type'),
  })
  .required();
