import { UserModel } from "./admin.model";

const admins = [
  {
    id: "8f528776-d063-4183-8d2a-30bc3874ecff",
    firstName: "John",
    lastName: "Smith",
    displayName: "John Smith",
    username: "test@gmail.com",
    email: "test@gmail.com",
    password: "$2b$10$SlE04yHdrYuTeuB9pco9LOCiS7iRpjWJblMD3nCiH7irNltAtXaoO",
    provider: "local",
    addresses: [],
  },
];

const seed = async () => {
  await UserModel.collection.drop();
  await UserModel.insertMany(admins);
  console.log("Completed Admin Data seeding");
};

export { seed };
