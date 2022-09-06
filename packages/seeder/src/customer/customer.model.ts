import { model, Schema } from 'mongoose';
import { Customer, CustomerAddress } from 'bs-commerce-models';

const CustomerAddressSchema = new Schema<CustomerAddress>({
  id: {
    type: String,
    index: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: String,
  company: String,
  state: String,
  country: String,
  postCode: String,
  phone: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
}, {
  _id: false,
  timestamps: false,
  versionKey: false
});

const CustomerSchema = new Schema<Customer>({
  id: {
    type: String,
    unique: true,
  },
  name: String,
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
  addresses: [CustomerAddressSchema]
}, {
  timestamps: true,
  versionKey: false
});

const CustomerModel = model<Customer>('customer', CustomerSchema);
export { CustomerModel };
export default CustomerModel;
