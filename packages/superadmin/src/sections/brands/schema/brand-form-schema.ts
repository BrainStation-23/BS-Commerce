import { Brand } from 'src/types/brands';
import * as Yup from 'yup';

// Brand form validation schema
export const brandSchema = Yup.object().shape({
  info: Yup.object().shape({
    name: Yup.string().required('Name is required').max(255, 'Name must not exceed 255 characters'),
    description: Yup.string().required('Description is required').max(5000, 'Description must not exceed 5000 characters'),
    allowToSelectPageSize: Yup.boolean().required('Allow to select page size is required'),
    published: Yup.boolean().required('Published is required'),
    displayOrder: Yup.number()
      .required('Display order is required')
      .min(0, 'Display order must be greater than or equal to 0')
      .typeError('Display order must be a number'),
    pageSizeOptions: Yup.array()
      .of(Yup.number().typeError('Page size option must be a number'))
      .required('Page size options are required')
      .min(1, 'At least one page size option is required'),
  }),
  meta: Yup.object().shape({
    keywords: Yup.string().required('Keywords is required').max(500, 'Keywords must not exceed 500 characters'),
    description: Yup.string().required('Description is required').max(500, 'Description must not exceed 500 characters'),
    title: Yup.string().required('Title is required').max(255, 'Title must not exceed 255 characters'),
    SEFN: Yup.string().required('SEFN is required').max(255, 'SEFN must not exceed 255 characters'),
  }),
});

// Default values function
export const getBrandDefaultValues = (brand?: Brand) => {
  if (!brand) {
    return {
      info: {
        name: '',
        description: '',
        allowToSelectPageSize: false,
        published: false,
        displayOrder: 0,
        pageSizeOptions: [],
      },
      meta: {
        keywords: '',
        description: '',
        title: '',
        SEFN: '',
      },
    };
  }

  return {
    info: {
      name: brand.info.name || '',
      description: brand.info.description || '',
      allowToSelectPageSize: brand.info.allowToSelectPageSize ?? false,
      published: brand.info.published ?? false,
      displayOrder: brand.info.displayOrder || 0,
      pageSizeOptions: brand.info.pageSizeOptions || [],
    },
    meta: {
      keywords: brand.meta?.keywords || '',
      description: brand.meta?.description || '',
      title: brand.meta?.title || '',
      SEFN: brand.meta?.SEFN || '',
    },
  };
};

// Form field types
export type BrandFormValues = ReturnType<typeof getBrandDefaultValues>;
