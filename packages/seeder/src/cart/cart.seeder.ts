import { CartModel } from "./cart.model";

const cart = [
    {
        id: "c2249214-df4d-48e1-b585-4ec2a8e61a86",
        userId: "bd257d8a-719e-4ae5-b68f-2f1e61229721",
        items: [{
            productId: "c1f3051a-30a7-47b8-b8b9-98099059b7a0",
            quantity: 2
        }],
    }
];

const seed = async () => {
    await CartModel.collection.drop();
    await CartModel.insertMany(cart);
    console.log('Completed Cart Data seeding');
};

export { seed };