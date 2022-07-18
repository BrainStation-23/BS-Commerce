import { model, Schema } from 'mongoose';

const CartSchema = new Schema(
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

const CartModel = model('cart', CartSchema);
export { CartModel };