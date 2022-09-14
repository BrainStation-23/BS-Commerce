import { UserModel } from './admin.model';

const admins = [
  {
    id: '33d9cad4-b68d-4fc9-ac61-e0f7e5ba2727',
    firstName: 'John',
    lastName: 'Doe',
    displayName: 'John Doe',
    username: 'johndoe@gmail.com',
    email: 'johndoe@gmail.com',
    password: '$2b$10$kkgek0Jew5ooU6le1XsLluvakefv/AS5pRaAGE/oWImWgCG6sUBN6', // Plain Password is 'admin@123'
    provider: 'local',
  },
];

const seed = async () => {
  await UserModel.collection.drop();
  await UserModel.insertMany(admins);
  console.log('Completed Admin Data seeding');
};

export { seed };
