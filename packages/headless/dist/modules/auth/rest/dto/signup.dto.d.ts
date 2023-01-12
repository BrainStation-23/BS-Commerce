import { CreateUserErrorResponse, CreateUserRequest, CreateUserSuccessResponse, SignUpErrorMessages, SignUpSuccessMessages } from '@bs-commerce/models';
export declare class CreateUserDto implements CreateUserRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
export declare class CreateUserErrorResponseDto implements CreateUserErrorResponse {
    code: number;
    error: SignUpErrorMessages;
    errors: string[];
}
export declare class CreateUserMessage {
    message: SignUpSuccessMessages.USER_CREATED_SUCCESSFUL;
}
export declare class CreateUserSuccessResponseDto implements CreateUserSuccessResponse {
    code: number;
    data: CreateUserMessage;
}
