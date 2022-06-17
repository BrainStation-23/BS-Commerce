export class Customer {
    id?: string;
    phone?: string;
    email?: string;
    password?: string;
    otp: string;
    otpVerified?: boolean;
    otpExpireTime?: Date;
}

export class SendOtpInputData {
    phone?: string;
    email?: string;
}

