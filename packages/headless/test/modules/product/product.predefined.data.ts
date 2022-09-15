import {
  CreateProductDto,
  UpdateProductDto,
} from 'src/modules/product/rest/dto';
import { TestProductId } from '../../test-utility/predefined.data';

export const validProductURl = 'realme-6-pro';
export const invalidProductURl = 'realme-6-';

export const validProductId = TestProductId;
export const invalidProductId = '6e9fb5dc-a3ad-4d35-81d2-16fc6e2dfg56';

export const validProductSKU = 'DH1';
export const invalidProductSKU = 'DH11';

export const validUpdatedProductsUsingBrandId = {
  productIds: [TestProductId],
  brandId: 'SmartPhone',
};

export const invalidUpdatedProductsUsingBrandId = {
  brandId: 'SmartPhone',
};

export const validProductRequest: CreateProductDto = {
  info: {
    name: 'apple 14 pro max',
    shortDescription: 'Short Description',
    fullDescription: 'Long Description',
    sku: 'APPLE14',
    price: 200000,
    oldPrice: 180000,
    cost: 200000,
    showOnHomePage: true,
    includeInTopMenu: true,
    allowToSelectPageSize: true,
    published: true,
    displayOrder: 1,
    isFeatured: true,
  },
  meta: {
    keywords: ['apple', 'phone'],
    title: 'Apple 14 Pro Max',
    description: 'meta description',
  },
  tags: ['phone'],
  photos: [
    {
      url: 'http://localhost:3000/src/public/assets/2022/6/18/apple.jpg',
      id: '5f1eca7e-010f-4114-91a0-e63d9553f908',
      title: 'Product Image',
      alt: 'Product Image',
      displayOrder: 1,
    },
  ],
  brands: ['apple'],
  manufacturer: {
    id: '5f1eca7e-010f-4114-91a0-e63d95533456',
    name: 'USA',
  },
  categories: [
    {
      id: '4f336ccd-e172-44b6-b5c1-15b61c3ef000',
      name: 'apple',
    },
  ],
};

export const invalidProductRequest = {
  info: {
    showOnHomePage: true,
    includeInTopMenu: true,
    allowToSelectPageSize: true,
    published: true,
    displayOrder: 1,
    isFeatured: true,
  },
  meta: {
    keywords: ['apple', 'phone'],
    title: 'Apple 14 Pro Max',
    description: 'meta description',
  },
  tags: ['phone'],
  photos: [
    {
      url: 'http://localhost:3000/src/public/assets/2022/6/18/apple.jpg',
      id: '5f1eca7e-010f-4114-91a0-e63d9553f908',
      title: 'Product Image',
      alt: 'Product Image',
      displayOrder: 1,
    },
  ],
  brands: ['apple'],
  manufacturer: {
    id: '5f1eca7e-010f-4114-91a0-e63d95533456',
    name: 'USA',
  },
  categories: [
    {
      id: '4f336ccd-e172-44b6-b5c1-15b61c3ef000',
      name: 'apple',
    },
  ],
};

export const existingSKUProductRequest: CreateProductDto = {
  info: {
    name: 'apple 14 pro max',
    shortDescription: 'Short Description',
    fullDescription: 'Long Description',
    sku: 'DH1',
    price: 200000,
    oldPrice: 180000,
    cost: 200000,
    showOnHomePage: true,
    includeInTopMenu: true,
    allowToSelectPageSize: true,
    published: true,
    displayOrder: 1,
    isFeatured: true,
  },
  meta: {
    keywords: ['apple', 'phone'],
    title: 'Apple 14 Pro Max',
    description: 'meta description',
  },
  tags: ['phone'],
  photos: [
    {
      url: 'http://localhost:3000/src/public/assets/2022/6/18/apple.jpg',
      id: '5f1eca7e-010f-4114-91a0-e63d9553f908',
      title: 'Product Image',
      alt: 'Product Image',
      displayOrder: 1,
    },
  ],
  brands: ['apple'],
  manufacturer: {
    id: '5f1eca7e-010f-4114-91a0-e63d95533456',
    name: 'USA',
  },
  categories: [
    {
      id: '4f336ccd-e172-44b6-b5c1-15b61c3ef000',
      name: 'apple',
    },
  ],
};

export const existingFriendlyPageNameProductRequest: CreateProductDto = {
  info: {
    name: 'Realme 6 pro',
    shortDescription: 'Short Description',
    fullDescription: 'Long Description',
    sku: 'DH111',
    price: 200000,
    oldPrice: 180000,
    cost: 200000,
    showOnHomePage: true,
    includeInTopMenu: true,
    allowToSelectPageSize: true,
    published: true,
    displayOrder: 1,
    isFeatured: true,
  },
  meta: {
    keywords: ['realme', 'phone'],
    title: 'Realme 6 pro',
    description: 'meta description',
  },
  tags: ['phone'],
  photos: [
    {
      url: 'http://localhost:3000/src/public/assets/2022/6/18/realme.jpg',
      id: '5f1eca7e-010f-4114-91a0-e63d9553f908',
      title: 'Product Image',
      alt: 'Product Image',
      displayOrder: 1,
    },
  ],
  brands: ['realme'],
  manufacturer: {
    id: '5f1eca7e-010f-4114-91a0-e63d95533456',
    name: 'USA',
  },
  categories: [
    {
      id: '4f336ccd-e172-44b6-b5c1-15b61c3ef000',
      name: 'realme',
    },
  ],
};

export const existingSKUUpdateProductRequest: UpdateProductDto = {
  info: {
    name: 'apple 14 pro',
    shortDescription: 'Short Description',
    fullDescription: 'Long Description',
    sku: 'DH1',
    price: 200000,
    oldPrice: 180000,
    cost: 200000,
    showOnHomePage: true,
    includeInTopMenu: true,
    allowToSelectPageSize: true,
    published: true,
    displayOrder: 1,
    isFeatured: true,
  },
};

export const existingFriendlyPageNameUpdateProductRequest: UpdateProductDto = {
  info: {
    name: 'Realme 6 pro',
    shortDescription: 'Short Description',
    fullDescription: 'Long Description',
    sku: 'APPLE14PRO',
    price: 200000,
    oldPrice: 180000,
    cost: 200000,
    showOnHomePage: true,
    includeInTopMenu: true,
    allowToSelectPageSize: true,
    published: true,
    displayOrder: 1,
    isFeatured: true,
  },
};

export const validUpdateProductRequest: UpdateProductDto = {
  info: {
    name: 'apple 14 pro',
    shortDescription: 'Short Description',
    fullDescription: 'Long Description',
    sku: 'APPLE14PRO',
    price: 200000,
    oldPrice: 180000,
    cost: 200000,
    showOnHomePage: true,
    includeInTopMenu: true,
    allowToSelectPageSize: true,
    published: true,
    displayOrder: 1,
    isFeatured: true,
  },
};

export const invalidUpdateProductRequest = {
  info: {
    name: 'apple 14 pro',
    shortDescription: 'Short Description',
    fullDescription: 'Long Description',
    sku: 123,
    oldPrice: '180000',
    cost: '200000',
    showOnHomePage: true,
    includeInTopMenu: true,
    allowToSelectPageSize: true,
    published: true,
    displayOrder: 1,
    isFeatured: true,
  },
};
