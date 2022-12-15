import { model, Schema } from 'mongoose';
import { Otp } from '../../../entity/otp';

const OtpSchema = new Schema<Otp>(
  {
    phone: String,
    email: String,
    otp: Number,
    isVerified: {
      type: Boolean,
      default: false,
    },
    otpExpireTime: Number,
    otpVerifiedAt: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const OtpModel = model<Otp>('otp', OtpSchema);
export { OtpModel };
