import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
/**
 * API Path: /customer/auth/verify-otp
 * method: POST
 * body: VerifyCreateCustomerOtpRequest
 * response: VerifyCreateCustomerOtpResponse
 */
export interface VerifyCreateCustomerOtpRequest {
    phone?: string;
    email?: string;
    otp: number;
}
export declare const enum VerifyCreateCustomerOtpSuccessMessages {
    OTP_VERIFIED_SUCCESSFUL = "OTP_VERIFIED_SUCCESSFUL"
}
export interface VerifyCreateCustomerOtpSuccessResponse extends SuccessResponse {
    code: number;
    data: {
        message?: VerifyCreateCustomerOtpSuccessMessages;
    };
}
export declare const enum VerifyCreateCustomerOtpErrorMessages {
    CUSTOMER_PHONE_ALREADY_EXITS = "CUSTOMER_PHONE_ALREADY_EXITS",
    CUSTOMER_EMAIL_ALREADY_EXITS = "CUSTOMER_EMAIL_ALREADY_EXITS",
    OTP_EXPIRED = "OTP_EXPIRED",
}
export interface VerifyCreateCustomerOtpErrorResponse extends ErrorResponse {
    code?: number;
    error: VerifyCreateCustomerOtpErrorMessages;
    errors: DescriptiveError;
}
export declare type VerifyCreateCustomerOtpResponse = VerifyCreateCustomerOtpSuccessResponse | VerifyCreateCustomerOtpErrorResponse;
