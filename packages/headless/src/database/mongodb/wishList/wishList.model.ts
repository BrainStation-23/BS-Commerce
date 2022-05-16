import { model, Schema } from 'mongoose';
import { WishList } from 'src/entity/wishList';
import { randomUUID } from 'crypto';

const WishListSchema = new Schema<WishList>({
  id: {
    type: String,
    unique: true,
    default: () => randomUUID()
  },
  userId: String,
  items: [
    {
      productId: String,
      quantity: {
        type: Number,
        default: 1,
      },
      _id: false,
    },
  ],
}, {
  timestamps: true,
  versionKey: false
});

const WishListModel = model<WishList>('wishList', WishListSchema);

export { WishListModel };
