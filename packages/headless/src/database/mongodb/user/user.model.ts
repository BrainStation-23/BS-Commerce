import { model, Schema } from 'mongoose';
import { Address, User } from 'src/entity/user';

const AddressSchema = new Schema<Address>({
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

const UserSchema = new Schema<User>({
  id: {
    type: String,
    unique: true,
  },
  firstName: String,
  lastName: String,
  displayName: String,
  username: {
    type: String,
    unique: true
  },
  phone: {
    type: String,
    index: true
  },
  email: {
    type: String,
    lowercase: true
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
  active: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  versionKey: false
});

const UserModel = model<User>('user', UserSchema);
export { UserModel };