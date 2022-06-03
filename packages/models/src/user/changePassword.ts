import { DescriptiveError, ErrorResponse, SuccessResponse, User } from "src/index";

/**
 * API Path: /user/password
 * method: PATCH
 * body: ChangePasswordRequest
 * response: ChangePasswordResponse
 */

export interface ChangePasswordRequest {
    currentPassword: string;
    newPassword: string;
}

export interface ChangePasswordSuccessResponse extends SuccessResponse {
    code: number;
    data: User;
}

export interface ChangePasswordErrorResponse extends ErrorResponse {
    code?: number;
    error: 'CANT\'T_GET_USER' | 'CURRENT_PASSWORD_IS_INCORRECT' | 'CAN\'T_CHANGE_PASSWORD';
    errors: DescriptiveError;
}

export type ChangePasswordResponse = ChangePasswordErrorResponse | ChangePasswordSuccessResponse;