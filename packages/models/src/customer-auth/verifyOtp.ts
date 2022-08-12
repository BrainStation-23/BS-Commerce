import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
/**
 * API Path: /customer/auth/register/verify-otp
 * method: POST
 * body: VerifyOtpRequest
 * response: VerifyOtpResponse
 */
export interface VerifyOtpRequest {
    phone?: string;
    email?: string;
    otp: number;
}
export declare const enum VerifyOtpSuccessMessages {
    OTP_VERIFIED_SUCCESSFUL = "OTP_VERIFIED_SUCCESSFUL"
}
export interface VerifyOtpSuccessResponse extends SuccessResponse {
    code: number;
    data: {
        message?: VerifyOtpSuccessMessages;
    };
}
export declare const enum VerifyOtpErrorMessages {
    CUSTOMER_PHONE_ALREADY_EXITS = "CUSTOMER_PHONE_ALREADY_EXITS",
    CUSTOMER_EMAIL_ALREADY_EXITS = "CUSTOMER_EMAIL_ALREADY_EXITS",
    OTP_EXPIRED_OR_INVALID_OTP = "OTP_EXPIRED_OR_INVALID_OTP",
}
export interface VerifyOtpErrorResponse extends ErrorResponse {
    code?: number;
    error: VerifyOtpErrorMessages;
    errors: DescriptiveError;
}
export declare type VerifyOtpResponse = VerifyOtpSuccessResponse | VerifyOtpErrorResponse;
