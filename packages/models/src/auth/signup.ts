import { DescriptiveError, ErrorResponse, SuccessResponse, User } from 'src/index';

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

export interface CreateUserSuccessResponse extends SuccessResponse {
    code: number;
    data: User;
}

export const enum SignUpErrorMessages {
    USER_ALREADY_EXITS = 'User already exits',
    CAN_NOT_CREATE_USER = 'Can\'t create user'
}

export interface CreateUserErrorResponse extends ErrorResponse {
    code?: number;
    error: SignUpErrorMessages.USER_ALREADY_EXITS | SignUpErrorMessages.CAN_NOT_CREATE_USER;
    errors: DescriptiveError;
}

export type CreateUserResponse = CreateUserSuccessResponse | CreateUserErrorResponse;