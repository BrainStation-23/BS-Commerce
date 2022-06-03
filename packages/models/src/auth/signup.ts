import { DescriptiveError, ErrorResponse, SuccessResponse, User } from 'src/index';

export enum ErrorMessages {
    USER_ALREADY_EXITS = 'USER_ALREADY_EXITS'
}

/**
 * API Path: /auth/sign-up
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
    error: ErrorMessages.USER_ALREADY_EXITS;
    errors: DescriptiveError;
}

export type CreateUserResponse = CreateUserSuccessResponse | CreateUserErrorResponse;