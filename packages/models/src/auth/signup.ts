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

export interface CreateUserErrorResponse extends ErrorResponse {
    code?: number;
    error: 'USER_ALREADY_EXITS' | 'CAN\'T_CREATE_USER';
    errors: DescriptiveError;
}

export type CreateUserResponse = CreateUserSuccessResponse | CreateUserErrorResponse;