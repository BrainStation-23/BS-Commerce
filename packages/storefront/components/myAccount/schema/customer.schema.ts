import { string, object } from 'yup';

export const CustomerSchema = object().shape({
  firstName: string(),
  lastName: string(),
  phone: string(),
  email: string(),
});
