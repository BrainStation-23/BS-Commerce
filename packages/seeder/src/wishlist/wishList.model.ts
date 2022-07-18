import { model, Schema } from 'mongoose';
import { Wishlist } from 'models';

const WishListSchema = new Schema<Wishlist>({
  id: {
    type: String,
    unique: true,
  },
  userId: String,
  items: [
    {
      productId: String,
      quantity: Number,
      _id: false,
    },
  ],
}, {
  timestamps: true,
  versionKey: false
});

const WishListModel = model<Wishlist>('wishList', WishListSchema);
export { WishListModel };
