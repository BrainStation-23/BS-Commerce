import { CustomerModel } from "./customer.model";

const customers = [
    {
        id: "574c0c31-e4cd-470b-a652-f964fb437b49",
        email: "ismail61@gmail.com",
        password: "$2b$10$fcw5sK7xTQVVZ9FcrEWG6uv9a1hmbFvVLwL67J4GRTVKxzZZCyZj2", //plain password is "secret"
        otp: "123456",
    }
];

const seed = async () => {
    await CustomerModel.collection.drop();
    await CustomerModel.insertMany(customers);
    console.log('Completed Customer Data seeding');
};

export { seed };