import { string, object, number } from 'yup';
import * as Yup from 'yup';
import { yupToFormErrors } from 'formik';

export const CategorySchema = object().shape({
  name: string().required('Category name is required'),
  description: string(),
  parentSlug: string(),
  photo: object().shape({
    url: string(),
    alt: string(),
  }),
  showOnHomePage: Yup.boolean(),
  includeInTopMenu: Yup.boolean(),
  allowToSelectPageSize: Yup.boolean(),
  published: Yup.boolean(),
  displayOrder: number(),
  meta: object().shape({
    keywords: string(),
    description: string(),
    title: string(),
    SEFN: string(),
  }),
});
