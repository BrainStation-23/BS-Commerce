import { randomUUID } from 'crypto';
import { model, Schema } from 'mongoose';
import { UserEntity } from 'src/entity/user';

/**
 * User Schema
 */
const UserSchema = new Schema<UserEntity>({
  id: {
    type: String,
    unique: true,
    default: () => randomUUID(),
  },
  firstName: String,
  lastName: String,
  displayName: String,
  username: String,
  email: {
    type: String,
  },
  phone: {
    type: String,
    unique: true,
  },
  password: String,
  provider: String,
  providerData: {},
  additionalProviderData: {},
});

const UserModel = model<UserEntity>('user', UserSchema);

export { UserModel };
