import { model, Schema } from 'mongoose';
import { Cart } from 'src/entity/cart';
import { randomUUID } from 'crypto';

const CartSchema = new Schema<Cart>(
  {
    id: {
      type: String,
      unique: true,
      default: () => randomUUID(),
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
  },
  {
    timestamps: true,
  },
);

const CartModel = model<Cart>('cart', CartSchema);
export { CartModel };
