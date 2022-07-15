import { string, object, number } from 'yup';
import * as Yup from 'yup';

export const brandSchema = object().shape({
  name: string().required('This field must not be empty'),
  description: string(),
  allowToSelectPageSize: Yup.boolean(),
  published: Yup.boolean(),
  displayOrder: number(),
  pageSizeOptions: Yup.array(),
  keywords: Yup.array(),
  metaTitle: string(),
  metaDescription: string(),
  SEFN: string(),
});
