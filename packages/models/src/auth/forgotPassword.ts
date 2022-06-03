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

export interface ForgotPasswordErrorResponse extends ErrorResponse {
    code?: number;
    error: 'CANT\'T_GET_USER' | 'CANT\'T_UPDATE_USER_PASSWORD' | 'SIGNED_UP_USING_YOUR_LOCAL_ACCOUNT';
    errors: DescriptiveError;
}

export type ForgotPasswordResponse = ForgotPasswordSuccessResponse | ForgotPasswordErrorResponse;