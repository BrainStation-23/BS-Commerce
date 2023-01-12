import { VerifyOtpErrorResponse, VerifyOtpRequest, VerifyOtpSuccessResponse, VerifyOtpErrorMessages, VerifyOtpSuccessMessages } from '@bs-commerce/models';
export declare class VerifyOtpDto implements VerifyOtpRequest {
    phone?: string;
    email?: string;
    otp: number;
}
export declare class VerifyOtpErrorResponseDto implements VerifyOtpErrorResponse {
    code: number;
    error: VerifyOtpErrorMessages;
    errors: string[];
}
export declare class VerifyOtpMessage {
    message: VerifyOtpSuccessMessages.OTP_VERIFIED_SUCCESSFUL;
}
export declare class VerifyOtpSuccessResponseDto implements VerifyOtpSuccessResponse {
    code: number;
    data: VerifyOtpMessage;
}
