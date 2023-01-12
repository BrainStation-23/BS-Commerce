import { SendOtpErrorResponse, SendOtpRequest, SendOtpSuccessResponse, SendOtpErrorMessages, SendOtpSuccessMessages } from '@bs-commerce/models';
export declare class SendOtpDto implements SendOtpRequest {
    phone?: string;
    email?: string;
}
export declare class SendOtpErrorResponseDto implements SendOtpErrorResponse {
    code: number;
    error: SendOtpErrorMessages;
    errors: string[];
}
export declare class SendOtpMessage {
    message: SendOtpSuccessMessages.OTP_SEND_SUCCESSFUL;
}
export declare class SendOtpSuccessResponseDto implements SendOtpSuccessResponse {
    code: number;
    data: SendOtpMessage;
}
