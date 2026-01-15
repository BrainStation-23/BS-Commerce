import { Tag } from 'src/types/tags';
import * as Yup from 'yup';

// Tag form validation schema
export const tagSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').max(255, 'Name must not exceed 255 characters'),
  isHomePageProductsTag: Yup.boolean().default(false),
});

// Default values function
export const getTagDefaultValues = (tag?: Tag) => {
  if (!tag) {
    return {
      name: '',
      isHomePageProductsTag: false,
    };
  }

  return {
    name: tag.name || '',
    isHomePageProductsTag: tag.isHomePageProductsTag ?? false,
  };
};

// Form field types
export type TagFormValues = ReturnType<typeof getTagDefaultValues>;
