import { model, Schema } from 'mongoose';
import { OrderEntity } from 'src/entity/order';

const AddressSchema = {
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    // Regexp to validate emails with more strict rules as added in tests/users.js which also conforms mostly with RFC2822 guide lines
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please enter a valid email',
    ],
  },
  addressLine1: {
    type: String,
    trim: true,
    required: true,
  },
  addressLine2: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
    required: true,
  },
  country: {
    type: String,
    trim: true,
    required: true,
  },
  postCode: {
    type: String,
    trim: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
    required: true,
  },
};

const ProductSchema = new Schema({
  productId: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    trim: true,
    required: true,
  },
  quantityShipped: {
    type: Number,
    default: 0,
  },
  sku: {
    type: String,
    trim: true,
    required: true,
  },
});

const OrderSchema = new Schema<OrderEntity>({
  user: {
    type: String,
    trim: true,
    required: true,
  },
  billingAddress: AddressSchema,
  shippingAddress: AddressSchema,
  shippingMethod: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    trim: true,
    required: true,
  },
  orderedDate: {
    type: Date,
    default: Date.now,
  },
  orderStatus: {
    type: String,
  },
  shippingStatus: {
    type: String,
  },
  paymentStatus: {
    type: String,
  },
  products: {
    type: [ProductSchema],
  },
  productCost: {
    type: Number,
    required: true,
  },
  shippingCost: {
    type: Number,
  },
  totalCost: {
    type: Number,
    required: true,
  },
  stripeToken: {
    type: String,
    trim: true,
    default: '',
  },
  stripeCustomerId: {
    type: String,
    default: '',
  },
  stripeChargeId: {
    type: String,
    default: '',
  },
  paypalPaymentId: {
    type: String,
    default: '',
  },
  paypalRedirectUrl: {
    type: String,
    default: '',
  },
});

const OrderModel = model<OrderEntity>('order', OrderSchema);
export { OrderModel };
