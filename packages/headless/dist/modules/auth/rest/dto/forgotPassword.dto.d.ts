import { ForgotPasswordErrorResponse, ForgotPasswordRequest, ForgotPasswordSuccessResponse, ForgotMessageResponse, ForgotPasswordErrorMessages } from '@bs-commerce/models';
export declare class ForgotPasswordDto implements ForgotPasswordRequest {
    username: string;
}
export declare class ChangePasswordMessageDto implements ForgotMessageResponse {
    message: string;
}
export declare class ForgotPasswordErrorResponseDto implements ForgotPasswordErrorResponse {
    code: number;
    error: ForgotPasswordErrorMessages;
    errors: string[];
}
export declare class ForgotPasswordSuccessResponseDto implements ForgotPasswordSuccessResponse {
    code: number;
    data: ChangePasswordMessageDto;
}
