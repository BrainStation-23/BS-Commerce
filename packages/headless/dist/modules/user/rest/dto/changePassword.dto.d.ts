import { ChangePasswordErrorResponse, ChangePasswordRequest, ChangePasswordSuccessResponse, ChangePasswordErrorMessages, ChangePasswordSuccessMessage } from '@bs-commerce/models';
export declare class ChangePasswordDto implements ChangePasswordRequest {
    currentPassword: string;
    newPassword: string;
}
export declare class ChangePasswordErrorResponseDto implements ChangePasswordErrorResponse {
    code: number;
    error: ChangePasswordErrorMessages;
    errors: string[];
}
declare class Message {
    message: ChangePasswordSuccessMessage.CHANGE_PASSWORD_SUCCESSFUL;
}
export declare class ChangePasswordSuccessResponseDto implements ChangePasswordSuccessResponse {
    code: number;
    data: Message;
}
export {};
