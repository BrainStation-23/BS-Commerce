import { Product } from 'src/types/products';
import * as Yup from 'yup';

// Product form validation schema
export const productSchema = Yup.object().shape({
  info: Yup.object().shape({
    name: Yup.string().required('Name is required').max(255, 'Name must not exceed 255 characters'),
    shortDescription: Yup.string().max(500, 'Short description must not exceed 500 characters'),
    fullDescription: Yup.string().max(5000, 'Full description must not exceed 5000 characters'),
    sku: Yup.string().required('SKU is required').max(100, 'SKU must not exceed 100 characters'),
    price: Yup.number()
      .required('Price is required')
      .min(0, 'Price must be greater than or equal to 0')
      .typeError('Price must be a number'),
    oldPrice: Yup.number()
      .required('Old price is required')
      .min(0, 'Old price must be greater than or equal to 0')
      .typeError('Old price must be a number'),
    cost: Yup.number()
      .required('Cost is required')
      .min(0, 'Cost must be greater than or equal to 0')
      .typeError('Cost must be a number'),
    showOnHomePage: Yup.boolean().default(false),
    includeInTopMenu: Yup.boolean().default(false),
    allowToSelectPageSize: Yup.boolean().default(false),
    published: Yup.boolean().default(false),
    displayOrder: Yup.number().default(0).typeError('Display order must be a number'),
    isFeatured: Yup.boolean().default(false),
  }),
  meta: Yup.object().shape({
    keywords: Yup.array().of(Yup.string()).default([]),
    title: Yup.string().max(255, 'Title must not exceed 255 characters'),
    description: Yup.string().max(500, 'Description must not exceed 500 characters'),
  }),
  tags: Yup.array().of(Yup.string()).default([]),
  photos: Yup.array()
    .of(
      Yup.object().shape({
        url: Yup.string().url('Must be a valid URL'),
        id: Yup.string(),
        title: Yup.string(),
        alt: Yup.string(),
        displayOrder: Yup.number().typeError('Display order must be a number'),
      })
    )
    .default([]),
  brands: Yup.array().of(Yup.string()).default([]),
  manufacturer: Yup.object()
    .shape({
      id: Yup.string().required('Manufacturer ID is required'),
      name: Yup.string().required('Manufacturer name is required'),
    })
    .required('Manufacturer is required'),
  categories: Yup.array()
    .of(
      Yup.object().shape({
        id: Yup.string().required('Category ID is required'),
        name: Yup.string().required('Category name is required'),
      })
    )
    .min(1, 'At least one category is required')
    .required('Categories are required'),
});

// Default values function
export const getProductDefaultValues = (product?: Product) => {
  if (!product) {
    return {
      info: {
        name: '',
        shortDescription: '',
        fullDescription: '',
        sku: '',
        price: 0,
        oldPrice: 0,
        cost: 0,
        showOnHomePage: false,
        includeInTopMenu: false,
        allowToSelectPageSize: false,
        published: false,
        displayOrder: 0,
        isFeatured: false,
      },
      meta: {
        keywords: [],
        title: '',
        description: '',
      },
      tags: [],
      photos: [
        {
          url: '',
          id: '',
          title: '',
          alt: '',
          displayOrder: 0,
        },
      ],
      brands: [],
      manufacturer: {
        id: '',
        name: '',
      },
      categories: [],
    };
  }

  return {
    info: {
      name: product.info.name || '',
      shortDescription: product.info.shortDescription || '',
      fullDescription: product.info.fullDescription || '',
      sku: product.info.sku || '',
      price: product.info.price || 0,
      oldPrice: product.info.oldPrice || 0,
      cost: product.info.cost || 0,
      showOnHomePage: product.info.showOnHomePage ?? false,
      includeInTopMenu: product.info.includeInTopMenu ?? false,
      allowToSelectPageSize: product.info.allowToSelectPageSize ?? false,
      published: product.info.published ?? false,
      displayOrder: product.info.displayOrder || 0,
      isFeatured: product.info.isFeatured ?? false,
    },
    meta: {
      keywords: product.meta?.keywords || [],
      title: product.meta?.title || '',
      description: product.meta?.description || '',
    },
    tags: product.tags || [],
    photos: product.photos && product.photos.length > 0
      ? product.photos
      : [
          {
            url: '',
            id: '',
            title: '',
            alt: '',
            displayOrder: 0,
          },
        ],
    brands: product.brands || [],
    manufacturer: product.manufacturer || { id: '', name: '' },
    categories: product.categories || [],
  };
};

// Form field types
export type ProductFormValues = ReturnType<typeof getProductDefaultValues>;
