import { model, Schema } from 'mongoose';
import { WishList } from 'src/entity/wishList';

const WishListSchema = new Schema<WishList>({
  id: {
    type: String,
    required: true,
    unique: true
  },
  user: {
    type: String,
    required: true,
  },

  items: [
    {
      product: {
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

  createdOn: {
    type: Date,
    default: new Date(),
  },
  updatedOn: {
    type: Date,
    default: new Date(),
  },
});

const WishListModel = model<WishList>('wishList', WishListSchema);

export { WishListModel };
