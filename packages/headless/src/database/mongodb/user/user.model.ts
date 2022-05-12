import { model, Schema } from 'mongoose';
import { Address, User } from 'src/entity/user';

const AddressSchema = new Schema<Address>({
  addressLine1: {
    type: String,
    required: true
  },
  addressLine2: String,
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  postCode: {
    type: String,
    required: true
  }
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
    unique: true
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
  resetPasswordExpires: Date,
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