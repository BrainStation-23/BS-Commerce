import { CreateUserRequest, SignInRequest, Token } from '@bs-commerce/models';
export declare class AdminSignUpInput implements CreateUserRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
export declare class AdminSignInInput implements SignInRequest {
    username: string;
    password: string;
}
export declare class AdminSignInResponseToken implements Token {
    token: string;
}
export declare class AdminSignUpResponseMessage {
    message: string;
}
export declare class AdminSignUpResponse {
    code: number;
    data?: AdminSignUpResponseMessage;
}
export declare class AdminSignInResponse {
    code: number;
    data?: AdminSignInResponseToken;
}
