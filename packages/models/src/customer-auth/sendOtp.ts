import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';

/**
 * API Path: /customer/auth/send-otp
 * method: POST
 * body: CreateCustomerSendOtpRequest
 * response: CreateCustomerSendOtpResponse
 */

export interface CreateCustomerSendOtpRequest {
    phone?: string;
    email?: string;
}

export interface CreateCustomerSendOtpSuccessResponse extends SuccessResponse {
    code: number;
    data: {
        message?: string
    };
}

export const enum CreateCustomerSendOtpErrorMessages {
    OTP_ALREADY_VERIFIED_SUCCEED = 'OTP_ALREADY_VERIFIED_SUCCEED',
    CAN_NOT_SEND_OTP = 'CAN_NOT_SEND_OTP'
}

export interface CreateCustomerSendOtpErrorResponse extends ErrorResponse {
    code?: number;
    error: CreateCustomerSendOtpErrorMessages;
    errors: DescriptiveError;
}

export type CreateCustomerSendOtpResponse = CreateCustomerSendOtpSuccessResponse | CreateCustomerSendOtpErrorResponse;