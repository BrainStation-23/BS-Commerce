import { model, Schema } from 'mongoose';
import { WishList } from 'src/entity/wishList';

const WishListSchema = new Schema<WishList>({
  id: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: String,
    required: true,
  },

  items: [
    {
      productId: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
      _id: false,
    },
  ],
},{
  timestamps: true
});

const WishListModel = model<WishList>('wishList', WishListSchema);

export { WishListModel };
