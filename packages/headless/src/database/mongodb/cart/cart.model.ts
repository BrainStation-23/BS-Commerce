import { string } from 'joi';
import { model, Schema } from 'mongoose';
import { Cart } from 'src/entity/cart';

const CartSchema = new Schema<Cart>({
  id: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    ref: 'User',
    required: true,
  },
  items: [
    {
      product: {
        type: String,
        ref: 'Product',
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

const CartModel = model<Cart>('cart', CartSchema);
export { CartModel };
