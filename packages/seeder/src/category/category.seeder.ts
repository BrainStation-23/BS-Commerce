import { CategoryModel } from './category.model';

const categories = [
  {
    name: 'Electronics',
    description: 'Electronics description',
    photo: {
      url: 'http://localhost:3000/src/public/assets/2022/6/18/electronics.jpg',
      alt: 'Electronics image',
    },
    showOnHomePage: true,
    includeInTopMenu: true,
    allowToSelectPageSize: true,
    published: true,
    displayOrder: 200,
    rootPath: '',
    meta: {
      keywords: ['electronics'],
      description: 'Electronics description',
      title: 'Electronics title',
      SEFN: 'Electronics',
    },
    id: '4f336ccd-e172-44b6-b5c1-15b61c3ef003',
    ancestors: [],
    slug: 'electronics',
  },
  {
    name: 'Smart Phone',
    description: 'Smart Phone description',
    photo: {
      url: 'http://localhost:3000/src/public/assets/2022/6/18/smartphone.jpg',
      alt: 'Smart Phone image',
    },
    showOnHomePage: true,
    includeInTopMenu: true,
    allowToSelectPageSize: true,
    published: true,
    displayOrder: 200,
    rootPath: 'electronics',
    meta: {
      keywords: ['electronics', 'smart-phone'],
      description: 'Smart Phone description',
      title: 'Smart Phone title',
      SEFN: 'Smart Phone',
    },
    id: '4f336ccd-e172-44b6-b5c1-15b61c3ef002',
    ancestors: [
      {
        name: 'Electronics',
        slug: 'electronics',
        level: 1,
      },
    ],
    slug: 'smart-phone',
  },
  {
    name: 'Realme',
    description: 'Realme description',
    photo: {
      url: 'http://localhost:3000/src/public/assets/2022/6/18/realme.jpg',
      alt: 'Realme image',
    },
    showOnHomePage: true,
    includeInTopMenu: true,
    allowToSelectPageSize: true,
    published: true,
    displayOrder: 200,
    rootPath: 'electronics/smart-phone',
    meta: {
      keywords: ['electronics', 'smart phone', 'realme'],
      description: 'Realme description',
      title: 'Realme title',
      SEFN: 'Realme',
    },
    id: '4f336ccd-e172-44b6-b5c1-15b61c3ef000',
    ancestors: [
      {
        name: 'Electronics',
        slug: 'electronics',
        level: 1,
      },
      {
        name: 'Smart Phone',
        slug: 'smart-phone',
        level: 2,
      },
    ],
    slug: 'realme',
  },
  {
    name: 'Realme 6',
    description: 'Realme 6 description',
    photo: {
      url: 'http://localhost:3000/src/public/assets/2022/6/18/realme6.jpg',
      alt: 'Realme 6 image',
    },
    showOnHomePage: true,
    includeInTopMenu: true,
    allowToSelectPageSize: true,
    published: true,
    displayOrder: 200,
    rootPath: 'electronics/smart-phone/realme',
    meta: {
      keywords: ['electronics', 'smart phone', 'realme', 'realme 6'],
      description: 'Realme 6 description',
      title: 'Realme 6 title',
      SEFN: 'Realme 6',
    },
    id: '34636ccd-e172-44b6-b5c1-15b61c3ef544',
    ancestors: [
      {
        name: 'Electronics',
        slug: 'electronics',
        level: 1,
      },
      ,
      {
        name: 'Smart Phone',
        slug: 'smart-phone',
        level: 2,
      },
      {
        name: 'Realme',
        slug: 'realme',
        level: 2,
      },
    ],
    slug: 'realme-6',
  },
  {
    name: 'Samsung',
    description: 'Samsung description',
    photo: {
      url: 'http://localhost:3000/src/public/assets/2022/6/18/samsung.jpg',
      alt: 'Samsung image',
    },
    showOnHomePage: true,
    includeInTopMenu: true,
    allowToSelectPageSize: true,
    published: true,
    displayOrder: 200,
    rootPath: 'electronics/smart-phone',
    meta: {
      keywords: ['electronics', 'smart phone', 'samsung'],
      description: 'Samsung description',
      title: 'Samsung title',
      SEFN: 'Samsung',
    },
    id: '4f336ccd-e902-44b6-b5c1-15b61c3ef544',
    ancestors: [
      {
        name: 'Electronics',
        slug: 'electronics',
        level: 1,
      },
      {
        name: 'Smart Phone',
        slug: 'smart-phone',
        level: 2,
      },
    ],
    slug: 'samsung',
  },
  {
    name: 'Oppo',
    description: 'Oppo description',
    photo: {
      url: 'http://localhost:3000/src/public/assets/2022/6/18/oppo.jpg',
      alt: 'Oppo image',
    },
    showOnHomePage: true,
    includeInTopMenu: true,
    allowToSelectPageSize: true,
    published: true,
    displayOrder: 200,
    rootPath: 'electronics/smart-phone',
    meta: {
      keywords: ['electronics', 'smart phone', 'oppo'],
      description: 'Oppo description',
      title: 'Oppo title',
      SEFN: 'Oppo',
    },
    id: '4f336ccd-e172-1234-b5c1-15b61c3ef544',
    ancestors: [
      {
        name: 'Electronics',
        slug: 'electronics',
        level: 1,
      },
      {
        name: 'Smart Phone',
        slug: 'smart-phone',
        level: 2,
      },
    ],
    slug: 'oppo',
  },
  {
    name: 'Apple',
    description: 'Apple description',
    photo: {
      url: 'http://localhost:3000/src/public/assets/2022/6/18/apple.jpg',
      alt: 'Apple image',
    },
    showOnHomePage: true,
    includeInTopMenu: true,
    allowToSelectPageSize: true,
    published: true,
    displayOrder: 200,
    rootPath: 'electronics/smart-phone',
    meta: {
      keywords: ['electronics', 'smart phone', 'apple'],
      description: 'Apple description',
      title: 'Apple title',
      SEFN: 'Apple',
    },
    id: '4f336ccd-e172-44b6-3456-15b61c3ef544',
    ancestors: [
      {
        name: 'Electronics',
        slug: 'electronics',
        level: 1,
      },
      {
        name: 'Smart Phone',
        slug: 'smart-phone',
        level: 2,
      },
    ],
    slug: 'apple',
  },
];

const seed = async () => {
  await CategoryModel.collection.drop();
  await CategoryModel.insertMany(categories);
  console.log('Completed Category Data seeding');
};

export { seed };
