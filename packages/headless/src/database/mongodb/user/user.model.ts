import { randomUUID } from 'crypto';
import { model, Schema } from 'mongoose';
import { User } from 'src/entity/user';

const UserSchema = new Schema<User>({
  id: {
    type: String,
    unique: true,
    default: () => randomUUID(),
  },
  firstName: String,
  lastName: String,
  displayName: String,
  username: {
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
	resetPasswordExpires: Date
}, {
  timestamps: true,
  versionKey: false
});

const UserModel = model<User>('user', UserSchema);
export { UserModel };