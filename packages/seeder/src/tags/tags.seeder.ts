import { TagsModel } from './tags.model';

const tags = [
  {
    id: '33d9cad4-b68d-4fc9-ac61-e0f7e5ba2727',
    name: 'phone',
  },
  {
    id: '33d9cad4-b68d-4fc9-ac61-e0f7e5123456',
    name: 'realme',
  },
  {
    id: '33d9cad4-b68d-4fc9-ac61-e0f7e5asdf33',
    name: 'smartphone',
  },
  {
    id: '33d9cad4-b68d-4fc9-ac61-e0f7e5cd34rf',
    name: 'samsung',
  },
  {
    id: '33d9cad4-b68d-4fc9-ac61-e0f7e5xsw23x',
    name: 'oppo',
  },
  {
    id: '33d9cad4-b68d-4fc9-ac61-e0f7e5zaq12w',
    name: 'apple',
  },
  {
    id: '33d9cad4-b68d-4fc9-ac61-e0f7efg56gt4',
    name: 'TOP_SELLING_PRODUCTS',
    isHomePageProductsTag: true,
  },
];

const seed = async () => {
  await TagsModel.collection.drop();
  await TagsModel.insertMany(tags);
  console.log('Completed Tags Data seeding');
};

export { seed };
