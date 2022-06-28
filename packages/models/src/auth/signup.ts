import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';

/**
 * API Path: /auth/signup
 * method: POST
 * body: CreateUserRequest
 * response: CreateUserResponse
 */

export interface CreateUserRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const enum SignUpSuccessMessages {
    USER_CREATED_SUCCESSFUL = 'USER_CREATED_SUCCESSFUL',
}

export interface CreateUserSuccessResponse extends SuccessResponse {
    code: number;
    data: {
        message?: SignUpSuccessMessages
    };
}

export const enum SignUpErrorMessages {
    USER_ALREADY_EXITS = 'USER_ALREADY_EXITS',
    CAN_NOT_CREATE_USER = 'CAN_NOT_CREATE_USER'
}

export interface CreateUserErrorResponse extends ErrorResponse {
    code?: number;
    error: SignUpErrorMessages;
    errors: DescriptiveError;
}

export type CreateUserResponse = CreateUserSuccessResponse | CreateUserErrorResponse;