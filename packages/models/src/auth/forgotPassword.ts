import { DescriptiveError, ErrorResponse } from 'src/common/index';
import { SuccessResponse } from 'src/common/index';

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
    CAN_NOT_GET_USER = 'Can\'t get user',
    CAN_NOT_UPDATE_USER_PASSWORD = 'Can\'t update user password',
    SIGNED_UP_USING_YOUR_LOCAL_ACCOUNT = 'It seems like you signed up using your local account'
}

export interface ForgotPasswordErrorResponse extends ErrorResponse {
    code?: number;
    error: ForgotPasswordErrorMessages.CAN_NOT_GET_USER | ForgotPasswordErrorMessages.CAN_NOT_UPDATE_USER_PASSWORD | ForgotPasswordErrorMessages.SIGNED_UP_USING_YOUR_LOCAL_ACCOUNT;
    errors: DescriptiveError;
}

export type ForgotPasswordResponse = ForgotPasswordSuccessResponse | ForgotPasswordErrorResponse;