import { model, Schema } from 'mongoose';
import { randomUUID } from 'crypto';
import { Customer } from 'src/entity/customer';

const CustomerSchema = new Schema<Customer>({
  id: {
    type: String,
    unique: true,
    default: () => randomUUID()
  },
  phone: {
    type: String,
    index: true
  },
  email: {
    type: String,
    index: true,
  },
  password: {
    type: String,
    required: true,
    index: true,
  },
  otp: {
    type: String,
    index: true
  },
  otpVerified: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  versionKey: false
});

const CustomerModel = model<Customer>('customer', CustomerSchema);
export { CustomerModel };