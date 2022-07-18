import { UserModel } from "./admin.model";

const admins = [
    {
        id: "33d9cad4-b68d-4fc9-ac61-e0f7e5ba2727",
        firstName: "Md Ismail",
        lastName: "Hosen",
        email: "ismail601@gmil.com",
        password: "$2b$10$g8vc9XG40I5HNXMhKjN5UuT/CHS/fpATBa62eYXXcDdnE9uEmZdj.", // plain password is "adminpassword"
    }
];

const seed = async () => {
    await UserModel.collection.drop();
    await UserModel.insertMany(admins);
    console.log('Completed Admin Data seeding');
};

export { seed };