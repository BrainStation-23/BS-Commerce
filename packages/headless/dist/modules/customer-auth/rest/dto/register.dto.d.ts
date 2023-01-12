import { CreateCustomerErrorResponse, CreateCustomerRequest, CreateCustomerSuccessResponse, CreateCustomerErrorMessages, CreateCustomerSuccessMessages } from '@bs-commerce/models';
export declare class CreateCustomerDto implements CreateCustomerRequest {
    phone?: string;
    email?: string;
    name: string;
    otp: number;
    password: string;
}
export declare class CreateCustomerErrorResponseDto implements CreateCustomerErrorResponse {
    code: number;
    error: CreateCustomerErrorMessages;
    errors: string[];
}
export declare class CreateCustomerMessage {
    message: CreateCustomerSuccessMessages.CUSTOMER_CREATED_SUCCESSFUL;
}
export declare class CreateCustomerSuccessResponseDto implements CreateCustomerSuccessResponse {
    code: number;
    data: CreateCustomerMessage;
}
