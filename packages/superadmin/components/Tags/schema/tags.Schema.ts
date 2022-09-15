import { string, object, number } from 'yup';

export const tagSchema = object().shape({
  name: string()
    .min(4, 'This field must be at least 4 characters long')
    .max(15, 'This field must be at most 15 characters long')
    .required('This field must not be empty'),
});
