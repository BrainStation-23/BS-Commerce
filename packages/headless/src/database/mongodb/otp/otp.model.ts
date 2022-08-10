import { model, Schema } from 'mongoose';
import { Otp } from 'src/entity/otp';

const OtpSchema = new Schema<Otp>({
  phone: String,
  email: String,
  otp: {
    type: Number,
    unique: true,
  },
  otpExpireTime: Number,
  passwordExpireTime: Number,
}, {
  timestamps: true,
  versionKey: false
});

const OtpModel = model<Otp>('otp', OtpSchema);
export { OtpModel };
