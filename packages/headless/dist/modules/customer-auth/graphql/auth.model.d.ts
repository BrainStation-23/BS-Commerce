import { Customer, CreateCustomerRequest, CustomerSignInRequest, GetCustomerQuery, SendOtpRequest, VerifyOtpRequest, CustomerForgotPasswordRequest } from '@bs-commerce/models';
export declare class AuthCustomer implements Customer {
    id: string;
    name: string;
    phone?: string;
    email?: string;
}
export declare class SendOtpInput implements SendOtpRequest {
    phone?: string;
    email?: string;
}
export declare class VerifyOtpInput implements VerifyOtpRequest {
    phone?: string;
    email?: string;
    otp: number;
}
export declare class CreateCustomerInput implements CreateCustomerRequest {
    phone?: string;
    email?: string;
    otp: number;
    name: string;
    password: string;
}
export declare class CustomerSignInDataInput implements CustomerSignInRequest {
    phone?: string;
    email?: string;
    password: string;
}
export declare class CustomerForgotPasswordDataInput implements CustomerForgotPasswordRequest {
    phone?: string;
    email?: string;
    password: string;
}
export declare class CustomerAuthResponseMessage {
    message: string;
}
export declare class RegistrationAuthResponse {
    code: number;
    data?: CustomerAuthResponseMessage;
}
export declare class ForgotPasswordResponse {
    code: number;
    data?: CustomerAuthResponseMessage;
}
export declare class SendOtpAuthResponse {
    code: number;
    data?: CustomerAuthResponseMessage;
}
export declare class VerifyOtpAuthResponse {
    code: number;
    data?: CustomerAuthResponseMessage;
}
export declare class CustomerSignInResponseToken {
    token: string;
}
export declare class SignInAuthResponse {
    code: number;
    data?: CustomerSignInResponseToken;
}
export declare class GetAuthCustomerQuery implements GetCustomerQuery {
    phone?: string;
    email?: string;
}
export declare class GetCustomerAuthResponse {
    code: number;
    data?: AuthCustomer;
}
