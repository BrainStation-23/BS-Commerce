import { WishListModel } from "./wishList.model";

const wishlists = [
    {
        id: "574c0c31-e4cd-470b-a652-4ec2a8e61a86",
        userId: "574c0c31-e4cd-470b-a652-f964fb437b49",
        items: [{
            productId: "6e9753bc-a3ad-4d35-81d2-16fc6e2dc54e",
            quantity: 2
        }],
    }
];

const seed = async () => {
    await WishListModel.collection.drop();
    await WishListModel.insertMany(wishlists);
    console.log('Completed Wishlist Data seeding');
};

export { seed };