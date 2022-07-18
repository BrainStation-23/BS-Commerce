import { UserModel } from "./admin.model";

const admins = [
    {
        id: "33d9cad4-b68d-4fc9-ac61-e0f7e5ba2727",
        firstName: "John",
        lastName: "Doe",
        email: "jorndoe@gmail.com",
        password: "$2b$10$y8wsnqy4F9T5jjjRDdsjSehgdKWPk/zioqIObTm/xJBlfRKyG30FW", // plain password is "admin@123"
    }
];

const seed = async () => {
    await UserModel.collection.drop();
    await UserModel.insertMany(admins);
    console.log('Completed Admin Data seeding');
};

export { seed };