import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
/**
 * API Path: /customer/auth/send-otp
 * method: POST
 * body: SendCreateCustomerOtpRequest
 * response: SendCreateCustomerOtpResponse
 */
export interface SendCreateCustomerOtpRequest {
    phone?: string;
    email?: string;
}
export declare const enum SendCreateCustomerOtpSuccessMessages {
    OTP_SEND_SUCCESSFUL = "OTP_SEND_SUCCESSFUL"
}
export interface SendCreateCustomerOtpSuccessResponse extends SuccessResponse {
    code: number;
    data: {
        message?: SendCreateCustomerOtpSuccessMessages;
    };
}
export declare const enum SendCreateCustomerOtpErrorMessages {
    CUSTOMER_PHONE_ALREADY_EXITS = "CUSTOMER_PHONE_ALREADY_EXITS",
    CUSTOMER_EMAIL_ALREADY_EXITS = "CUSTOMER_EMAIL_ALREADY_EXITS",
    CAN_NOT_UPDATE_OTP = "CAN_NOT_UPDATE_OTP",
    CAN_NOT_SEND_OTP = "CAN_NOT_SEND_OTP"
}
export interface SendCreateCustomerOtpErrorResponse extends ErrorResponse {
    code?: number;
    error: SendCreateCustomerOtpErrorMessages;
    errors: DescriptiveError;
}
export declare type SendCreateCustomerOtpResponse = SendCreateCustomerOtpSuccessResponse | SendCreateCustomerOtpErrorResponse;
