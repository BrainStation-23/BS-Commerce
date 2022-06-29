import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';

/**
 * API Path: /auth/forgot
 * method: POST
 * body: ForgotPasswordRequest
 * response: ForgotPasswordResponse
 */

export interface ForgotPasswordRequest {
    username: string;
}

export interface ForgotMessageResponse {
    message?: string;
}

export interface ForgotPasswordSuccessResponse extends SuccessResponse {
    code: number;
    data: ForgotMessageResponse
}

export const enum ForgotPasswordErrorMessages {
    CAN_NOT_GET_USER = 'CAN_NOT_GET_USER',
    CAN_NOT_UPDATE_USER_PASSWORD = 'CAN_NOT_UPDATE_USER_PASSWORD',
    SIGNED_UP_USING_YOUR_LOCAL_ACCOUNT = 'SIGNED_UP_USING_YOUR_LOCAL_ACCOUNT'
}

export interface ForgotPasswordErrorResponse extends ErrorResponse {
    code?: number;
    error: ForgotPasswordErrorMessages;
    errors: DescriptiveError;
}

export type ForgotPasswordResponse = ForgotPasswordSuccessResponse | ForgotPasswordErrorResponse;