export class Otp {
  id?: string;
  userId?: string;
  phone?: string;
  email?: string;
  otp: number;
  otpExpireTime?: number;
  isVerified?: boolean;
  otpVerifiedAt?: number;
}
