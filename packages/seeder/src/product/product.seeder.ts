import { ProductModel } from './product.model';

const products = [
  {
    id: '6e9fb5dc-a3ad-4d35-81d2-16fc6e2dc54e',
    info: {
      name: 'Realme 6 pro',
      shortDescription: 'Short Description',
      fullDescription: 'Long Description',
      sku: 'DH1',
      price: 20000,
      oldPrice: 18000,
      cost: 20000,
      showOnHomePage: true,
      includeInTopMenu: true,
      allowToSelectPageSize: true,
      published: true,
      displayOrder: 1,
      isFeatured: true,
    },
    meta: {
      keywords: ['realme', 'phone'],
      title: 'Realme 6 Pro',
      description: 'meta description',
      friendlyPageName: 'realme-6-pro',
    },
    tags: ['phone', 'realme', 'smartphone'],
    photos: [
      {
        url: 'http://localhost:3000/src/public/assets/2022/6/18/realme.jpg',
        id: '5f1eca7e-010f-4114-91a0-e63d9553f908',
        title: 'Product Image',
        alt: 'Product Image',
        displayOrder: 1,
      },
    ],
    brands: ['Realme', 'SmartPhone'],
    manufacturer: {
      id: '5f1eca7e-010f-4114-91a0-e63d95533456',
      name: 'China',
    },
    categories: [
      {
        id: '4f336ccd-e172-44b6-b5c1-15b61c3ef000',
        name: 'Realme',
      },
    ],
  },
  {
    id: '6e9fb5dc-a3ad-4d35-81d2-16fc6e2dc523',
    info: {
      name: 'Realme 6',
      shortDescription: 'Realme 6 Short Description',
      fullDescription: 'Realme 6 Long Description',
      sku: 'DH2',
      price: 15000,
      oldPrice: 14000,
      cost: 15000,
      showOnHomePage: true,
      includeInTopMenu: true,
      allowToSelectPageSize: true,
      published: true,
      displayOrder: 1,
      isFeatured: true,
    },
    meta: {
      keywords: ['realme', 'phone'],
      title: 'Realme 6',
      description: 'meta description',
      friendlyPageName: 'realme-6',
    },
    tags: ['phone', 'realme', 'smartphone'],
    photos: [
      {
        url: 'http://localhost:3000/src/public/assets/2022/6/18/realme6.jpg',
        id: '5f1eca7e-010f-4114-91a0-e63d95531234',
        title: 'Product Image',
        alt: 'Product Image',
        displayOrder: 1,
      },
    ],
    brands: ['Realme', 'SmartPhone'],
    manufacturer: {
      id: '5f1eca7e-010f-4114-91a0-e63d95533456',
      name: 'China',
    },
    categories: [
      {
        id: '34636ccd-e172-44b6-b5c1-15b61c3ef544',
        name: 'Realme 6',
      },
    ],
  },
  {
    id: '6e9fb5dc-a3ad-4d35-81d2-16fc6e2dc45d',
    info: {
      name: 'Samsung M21',
      shortDescription: 'Samsung M21 Short Description',
      fullDescription: 'Samsung M21 Long Description',
      sku: 'DH3',
      price: 25000,
      oldPrice: 23000,
      cost: 25000,
      showOnHomePage: true,
      includeInTopMenu: true,
      allowToSelectPageSize: true,
      published: true,
      displayOrder: 1,
      isFeatured: true,
    },
    meta: {
      keywords: ['samsung', 'phone'],
      title: 'Samsung M21',
      description: 'meta description',
      friendlyPageName: 'samsung-m21',
    },
    tags: ['phone', 'samsung', 'smartphone'],
    photos: [
      {
        url: 'http://localhost:3000/src/public/assets/2022/6/18/samsung.jpg',
        id: '5f1eca7e-780f-4114-91a0-e63d9553f890',
        title: 'Product Image',
        alt: 'Product Image',
        displayOrder: 1,
      },
    ],
    brands: ['Samsung', 'SmartPhone'],
    manufacturer: {
      id: '5f1eca7e-900f-4114-91a0-e63d9553f5d6',
      name: 'USA',
    },
    categories: [
      {
        id: '4f336ccd-e902-44b6-b5c1-15b61c3ef544',
        name: 'Samsung',
      },
    ],
  },
  {
    id: '6e9fb78c-a3ad-4d35-81d2-16fc6e2dc54e',
    info: {
      name: 'Oppo A5',
      shortDescription: 'Oppo A5 Short Description',
      fullDescription: 'Oppo A5 Long Description',
      sku: 'DH4',
      price: 17000,
      oldPrice: 15000,
      cost: 17000,
      showOnHomePage: true,
      includeInTopMenu: true,
      allowToSelectPageSize: true,
      published: true,
      displayOrder: 1,
      isFeatured: true,
    },
    meta: {
      keywords: ['oppo', 'phone'],
      title: 'Oppo A5',
      description: 'meta description',
      friendlyPageName: 'oppo-a5',
    },
    tags: ['phone', 'oppo', 'smartphone'],
    photos: [
      {
        url: 'http://localhost:3000/src/public/assets/2022/6/18/oppo.jpg',
        id: '5f1eca7e-010f-4190-91a0-e63d9553f890',
        title: 'Product Image',
        alt: 'Product Image',
        displayOrder: 1,
      },
    ],
    brands: ['Oppo', 'SmartPhone'],
    manufacturer: {
      id: '5f1eca7e-010f-4114-91a0-e63d95533456',
      name: 'China',
    },
    categories: [
      {
        id: '4f336ccd-e172-1234-b5c1-15b61c3ef544',
        name: 'Oppo',
      },
    ],
  },
  {
    id: '6e9753bc-a3ad-4d35-81d2-16fc6e2dc54e',
    info: {
      name: 'Apple 11 pro',
      shortDescription: 'Apple 11 pro Short Description',
      fullDescription: 'Apple 11 pro Long Description',
      sku: 'DH5',
      price: 100000,
      oldPrice: 96000,
      cost: 100000,
      showOnHomePage: true,
      includeInTopMenu: true,
      allowToSelectPageSize: true,
      published: true,
      displayOrder: 1,
      isFeatured: true,
    },
    meta: {
      keywords: ['apple', 'phone'],
      title: 'Apple 11 pro',
      description: 'meta description',
      friendlyPageName: 'apple-11-pro',
    },
    tags: ['phone', 'apple', 'smartphone'],
    photos: [
      {
        url: 'http://localhost:3000/src/public/assets/2022/6/18/apple.jpg',
        id: '5f1eca7e-010f-4190-56a0-e63d9553f890',
        title: 'Product Image',
        alt: 'Product Image',
        displayOrder: 1,
      },
    ],
    brands: ['Apple', 'SmartPhone'],
    manufacturer: {
      id: '5f1eca7e-900f-4114-91a0-e63d9553f5d6',
      name: 'USA',
    },
    categories: [
      {
        id: '4f336ccd-e172-44b6-3456-15b61c3ef544',
        name: 'Apple',
      },
    ],
  },
];

const seed = async () => {
  await ProductModel.collection.drop();
  await ProductModel.insertMany(products);
  console.log('Completed Product Data seeding');
};

export { seed };
