import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';

/**
 * API Path: /customer/forgot
 * method: POST
 * body: CustomerForgotPasswordRequest
 * response: CustomerForgotPasswordResponse
 */

export interface CustomerForgotPasswordRequest {
  phone?: string;
  email?: string;
  password: string;
}

export interface CustomerForgotPasswordMessage {
  message?: string;
}

export interface CustomerForgotPasswordSuccessResponse extends SuccessResponse {
  code: number;
  data: CustomerForgotPasswordMessage;
}

export const enum CustomerForgotPasswordSuccessMessages {
  FORGOT_PASSWORD_SUCCESSFUL = 'FORGOT_PASSWORD_SUCCESSFUL',
}

export const enum CustomerForgotPasswordErrorMessages {
  CAN_NOT_GET_CUSTOMER = 'CAN_NOT_GET_CUSTOMER',
  CAN_NOT_UPDATE_CUSTOMER_PASSWORD = 'CAN_NOT_UPDATE_CUSTOMER_PASSWORD',
}

export interface CustomerForgotPasswordErrorResponse extends ErrorResponse {
  code?: number;
  error: CustomerForgotPasswordErrorMessages;
  errors: DescriptiveError;
}

export type CustomerForgotPasswordResponse =
  | CustomerForgotPasswordSuccessResponse
  | CustomerForgotPasswordErrorResponse;
