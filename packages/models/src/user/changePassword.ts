import { DescriptiveError, ErrorResponse, SuccessResponse, User } from "src/index";

export interface ChangePasswordRequest {
    currentPassword: string;
    newPassword: string;
}

export interface ChangePasswordSuccessResponse extends SuccessResponse {
    code: number;
    data: User;
}

export interface ChangePasswordErrorResponse extends ErrorResponse {
    code: number;
    error: string;
    errors: DescriptiveError;
}