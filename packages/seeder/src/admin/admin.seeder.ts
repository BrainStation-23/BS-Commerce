import { UserModel } from "./admin.model";

const admins = [
  {
    id: "9973674c-b372-449c-ab0d-aa32bb9ceb15",
    firstName: "John",
    lastName: "Smith",
    displayName: "John Smith",
    username: "admin@gmail.com",
    email: "admin@gmail.com",
    password: "$2b$10$uG9OKLJt04snK2X3bGrQpudkRfKdklZGyOFNnTHZIvz5H8vs82hSK",
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
