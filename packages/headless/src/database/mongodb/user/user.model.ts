import { model, Schema } from 'mongoose';
import { UserEntity } from 'src/entity/user';

/**
 * User Schema
 */
const UserSchema = new Schema<UserEntity>({
  id: String,
  firstName: String,
  lastName: String,
  displayName: String,
  username: String,
  email: String,
  phone: String,
  password: String,
  provider: String,
  providerData: {},
  additionalProviderData: {},
});

const UserModel = model<UserEntity>('user', UserSchema);

export { UserModel };
