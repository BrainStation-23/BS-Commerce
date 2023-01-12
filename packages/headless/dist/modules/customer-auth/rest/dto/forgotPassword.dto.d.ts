import { CustomerForgotPasswordErrorResponse, CustomerForgotPasswordRequest, CustomerForgotPasswordMessage, CustomerForgotPasswordErrorMessages, CustomerForgotPasswordSuccessResponse } from '@bs-commerce/models';
export declare class CustomerForgotPasswordDto implements CustomerForgotPasswordRequest {
    phone?: string;
    email?: string;
    password: string;
}
export declare class CustomerForgotPasswordSuccessMessage implements CustomerForgotPasswordMessage {
    message: string;
}
export declare class CustomerForgotPasswordErrorResponseDto implements CustomerForgotPasswordErrorResponse {
    code: number;
    error: CustomerForgotPasswordErrorMessages;
    errors: string[];
}
export declare class CustomerForgotPasswordSuccessResponseDto implements CustomerForgotPasswordSuccessResponse {
    code: number;
    data: CustomerForgotPasswordSuccessMessage;
}
