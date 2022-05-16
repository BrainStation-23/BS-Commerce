import { model, Schema } from 'mongoose';
import { Cart } from 'src/entity/cart';

const CartSchema = new Schema<Cart>(
  {
    id: {
      type: String,
      unique: true,
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
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const CartModel = model<Cart>('cart', CartSchema);
export { CartModel };