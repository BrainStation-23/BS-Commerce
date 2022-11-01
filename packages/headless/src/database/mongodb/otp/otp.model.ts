import { randomUUID } from 'crypto';
import { model, Schema } from 'mongoose';
import { Otp } from 'src/entity/otp';

const OtpSchema = new Schema<Otp>(
  {
    id: {
      type: String,
      default: () => randomUUID(),
      unique: true,
    },
    userId: {
      type: String,
      default: '',
    },
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
