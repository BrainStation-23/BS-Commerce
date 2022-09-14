import { ManufacturerModel } from './manufacturer.model';

const manufacturers = [
  {
    id: '5f1eca7e-900f-4114-91a0-e63d9553f5d6',
    name: 'USA',
  },
  {
    id: '5f1eca7e-010f-4114-91a0-e63d95533456',
    name: 'China',
  },
];

const seed = async () => {
  await ManufacturerModel.collection.drop();
  await ManufacturerModel.insertMany(manufacturers);
  console.log('Completed Manufacturer Data seeding');
};

export { seed };
