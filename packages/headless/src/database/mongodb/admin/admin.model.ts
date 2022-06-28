import { model, Schema } from 'mongoose';
import { Address, Admin } from 'src/entity/admin';
import { randomUUID } from 'crypto';

const AddressSchema = new Schema<Address>({
  id: {
    type: String,
    default: () => randomUUID(),
    Index: true,
  },
  addressLine1: String,
  addressLine2: String,
  city: String,
  country: String,
  postCode: String
}, {
  _id: false,
  timestamps: false,
  versionKey: false
});

const AdminSchema = new Schema<Admin>({
  id: {
    type: String,
    unique: true,
    default: () => randomUUID()
  },
  firstName: String,
  lastName: String,
  displayName: String,
  phone: {
    type: String,
    index: true
  },
  username: {
    type: String,
    unique: true,
    index: true
  },
  email: {
    type: String,
    index: true,
  },
  password: String,
  provider: String,
  providerData: {},
  additionalProviderData: {},
  resetPasswordToken: String,
  resetPasswordExpires: Number,
  gender: String,
  addresses: [AddressSchema],
  status: {
    type: String,
    enum: ['active', 'inactive', 'email-not-verified']
  },
}, {
  timestamps: true,
  versionKey: false
});

const AdminModel = model<Admin>('admin', AdminSchema);
export { AdminModel };