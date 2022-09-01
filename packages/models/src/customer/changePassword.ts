import { DescriptiveError, ErrorResponse, SuccessResponse, User } from 'src/index';

/**
 * API Path: /customer/password
 * method: PATCH
 * body: CustomerChangePasswordRequest
 * response: CustomerChangePasswordResponse
 */

export interface CustomerChangePasswordRequest {
    email?: string;
    phone?: string;
    otp: number;
    currentPassword: string;
    newPassword: string;
}

export const enum CustomerChangePasswordSuccessMessage {
    CHANGE_PASSWORD_SUCCESSFUL = 'CHANGE_PASSWORD_SUCCESSFUL',
}

export interface CustomerChangePasswordSuccessResponse extends SuccessResponse {
    code: number;
    data: {
        message?: CustomerChangePasswordSuccessMessage;
    };
}

export const enum CustomerChangePasswordErrorMessages {
    INVALID_USER_OR_PASSWORD = 'INVALID_USER_OR_PASSWORD',
    CURRENT_PASSWORD_IS_INCORRECT = 'CURRENT_PASSWORD_IS_INCORRECT',
    CAN_NOT_CHANGE_PASSWORD = 'CAN_NOT_CHANGE_PASSWORD',
}

export interface CustomerChangePasswordErrorResponse extends ErrorResponse {
    code?: number;
    error: CustomerChangePasswordErrorMessages;
    errors: DescriptiveError;
}

export type CustomerChangePasswordResponse = CustomerChangePasswordErrorResponse | CustomerChangePasswordSuccessResponse;