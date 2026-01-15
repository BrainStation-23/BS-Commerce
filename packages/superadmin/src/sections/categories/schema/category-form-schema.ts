import { Category } from 'src/types/categories';
import * as Yup from 'yup';

// Category form validation schema
export const categorySchema = Yup.object().shape({
  name: Yup.string().required('Name is required').max(255, 'Name must not exceed 255 characters'),
  parentSlug: Yup.string(),
  photo: Yup.object().shape({
    url: Yup.string().required('Photo URL is required'),
    alt: Yup.string().required('Photo alt is required'),
  }),
  description: Yup.string().required('Description is required'),
  showOnHomePage: Yup.boolean().required('Show on home page is required'),
  includeInTopMenu: Yup.boolean().required('Include in top menu is required'),
  allowToSelectPageSize: Yup.boolean().required('Allow to select page size is required'),
  published: Yup.boolean().required('Published is required'),
  displayOrder: Yup.number()
    .required('Display order is required')
    .min(0, 'Display order must be greater than or equal to 0')
    .typeError('Display order must be a number'),
  meta: Yup.object().shape({
    keywords: Yup.array().of(Yup.string()).required('Keywords are required'),
    description: Yup.string().required('Meta description is required'),
    title: Yup.string().required('Meta title is required'),
    SEFN: Yup.string().required('SEFN is required'),
  }),
});

// Default values function
export const getCategoryDefaultValues = (category?: Category) => {
  if (!category) {
    return {
      name: '',
      parentSlug: '',
      photo: {
        url: '',
        alt: '',
      },
      description: '',
      showOnHomePage: false,
      includeInTopMenu: false,
      allowToSelectPageSize: false,
      published: false,
      displayOrder: 0,
      meta: {
        keywords: [],
        description: '',
        title: '',
        SEFN: '',
      },
    };
  }

  return {
    name: category.name || '',
    parentSlug: '',
    photo: {
      url: category.photo?.url || '',
      alt: category.photo?.alt || '',
    },
    description: category.description || '',
    showOnHomePage: category.showOnHomePage ?? false,
    includeInTopMenu: category.includeInTopMenu ?? false,
    allowToSelectPageSize: category.allowToSelectPageSize ?? false,
    published: category.published ?? false,
    displayOrder: category.displayOrder || 0,
    meta: {
      keywords: category.meta?.keywords || [],
      description: category.meta?.description || '',
      title: category.meta?.title || '',
      SEFN: category.meta?.SEFN || '',
    },
  };
};

// Form field types
export type CategoryFormValues = ReturnType<typeof getCategoryDefaultValues>;
