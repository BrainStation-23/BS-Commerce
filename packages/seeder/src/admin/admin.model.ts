import { model, Schema } from 'mongoose';
import { Address, User } from 'models';

const AddressSchema = new Schema<Address>({
  id: {
    type: String,
    index: true,
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

const UserSchema = new Schema({
  id: {
    type: String,
    unique: true,
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

const UserModel = model<User>('user', UserSchema);
export { UserModel };
export default UserModel;