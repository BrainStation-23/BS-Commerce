import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';

/**
 * API Path: /customer/auth/verify-otp
 * method: POST
 * body: CreateCustomerVerifyOtpRequest
 * response: CreateCustomerVerifyOtpResponse
 */

export interface CreateCustomerVerifyOtpRequest {
    phone?: string;
    email?: string;
    otp: string
}

export const enum CreateCustomerVerifyOtpSuccessMessages {
    OTP_VERIFIED_SUCCESSFUL = 'OTP_VERIFIED_SUCCESSFUL',
}

export interface CreateCustomerVerifyOtpSuccessResponse extends SuccessResponse {
    code: number;
    data: {
        message?: string
    };
}

export const enum CreateCustomerVerifyOtpErrorMessages {
    OTP_ALREADY_VERIFIED = 'OTP_ALREADY_VERIFIED',
    CAN_NOT_VERIFY_OTP = 'CAN_NOT_VERIFY_OTP',
    CAN_NOT_GET_CUSTOMER = 'CAN_NOT_GET_CUSTOMER',
    INVALID_OTP = 'INVALID_OTP'
}

export interface CreateCustomerVerifyOtpErrorResponse extends ErrorResponse {
    code?: number;
    error: CreateCustomerVerifyOtpErrorMessages;
    errors: DescriptiveError;
}

export type CreateCustomerVerifyOtpResponse = CreateCustomerVerifyOtpSuccessResponse | CreateCustomerVerifyOtpErrorResponse;