import { UserModel } from "./admin.model";
import * as bcrypt from 'bcrypt';

const admins = [
    {
        id: "33d9cad4-b68d-4fc9-ac61-e0f7e5ba2727",
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com",
        password: "admin@123"
    }
];

const seed = async () => {
    await UserModel.collection.drop();
    admins.forEach(async admin => {
        admin.password = await bcrypt.hash(admin.password, 10);
    })
    await UserModel.insertMany(admins);
    console.log('Completed Admin Data seeding');
};

export { seed };