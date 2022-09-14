import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
/**
 * API Path: /customer/auth/register/send-otp
 * method: POST
 * body: SendOtpRequest
 * response: SendOtpResponse
 */
export interface SendOtpRequest {
  phone?: string;
  email?: string;
}
export declare const enum SendOtpSuccessMessages {
  OTP_SEND_SUCCESSFUL = 'OTP_SEND_SUCCESSFUL',
}
export interface SendOtpSuccessResponse extends SuccessResponse {
  code: number;
  data: {
    message?: SendOtpSuccessMessages;
  };
}
export declare const enum SendOtpErrorMessages {
  CUSTOMER_PHONE_ALREADY_EXITS = 'CUSTOMER_PHONE_ALREADY_EXITS',
  CUSTOMER_EMAIL_ALREADY_EXITS = 'CUSTOMER_EMAIL_ALREADY_EXITS',
  CAN_NOT_UPDATE_OTP = 'CAN_NOT_UPDATE_OTP',
  CAN_NOT_SEND_OTP = 'CAN_NOT_SEND_OTP',
}
export interface SendOtpErrorResponse extends ErrorResponse {
  code?: number;
  error: SendOtpErrorMessages;
  errors: DescriptiveError;
}
export declare type SendOtpResponse =
  | SendOtpSuccessResponse
  | SendOtpErrorResponse;
