import { model, Schema } from 'mongoose';
import { UserEntity } from 'src/entity/user';

/**
 * User Schema
 */
const UserSchema = new Schema<UserEntity>({
  firstName: {
    type: String,
    trim: true,
    default: '',
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    default: '',
    required: true,
  },
  displayName: {
    type: String,
    trim: true,
    default: '',
    required: false,
  },
  username: {
    type: String,
    trim: true,
    default: '',
    required: false,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: false,
  },
  phone: {
    type: String,
    trim: true,
    unique: true,
    match: [
      /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
      'Please fill a valid phone number',
    ],
  },
  password: {
    type: String,
    default: '',
  },
  provider: {
    type: String,
    default: '',
    required: false,
  },
  providerData: {},
  additionalProviderData: {},
});

const UserModel = model<UserEntity>('user-auth', UserSchema);

export { UserModel };
