import { Manufacturer } from 'src/types/manufacturers';
import * as Yup from 'yup';

// Manufacturer form validation schema
export const manufacturerSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').max(255, 'Name must not exceed 255 characters'),
  description: Yup.string().max(5000, 'Description must not exceed 5000 characters'),
  picture: Yup.string(),
  isPublished: Yup.boolean().default(false),
  displayOrder: Yup.number()
    .min(0, 'Display order must be greater than or equal to 0')
    .typeError('Display order must be a number'),
  seo: Yup.object().shape({
    metaKeyword: Yup.string().max(500, 'Meta keyword must not exceed 500 characters'),
    metaDescription: Yup.string().max(500, 'Meta description must not exceed 500 characters'),
    metaTitle: Yup.string().max(255, 'Meta title must not exceed 255 characters'),
    SEFN: Yup.string().max(255, 'SEFN must not exceed 255 characters'),
  }),
});

// Default values function
export const getManufacturerDefaultValues = (manufacturer?: Manufacturer) => {
  if (!manufacturer) {
    return {
      name: '',
      description: '',
      picture: '',
      isPublished: false,
      displayOrder: 0,
      seo: {
        metaKeyword: '',
        metaDescription: '',
        metaTitle: '',
        SEFN: '',
      },
    };
  }

  return {
    name: manufacturer.name || '',
    description: manufacturer.description || '',
    picture: manufacturer.picture || '',
    isPublished: manufacturer.isPublished ?? false,
    displayOrder: manufacturer.displayOrder || 0,
    seo: {
      metaKeyword: manufacturer.seo?.metaKeyword || '',
      metaDescription: manufacturer.seo?.metaDescription || '',
      metaTitle: manufacturer.seo?.metaTitle || '',
      SEFN: manufacturer.seo?.SEFN || '',
    },
  };
};

// Form field types
export type ManufacturerFormValues = ReturnType<typeof getManufacturerDefaultValues>;
