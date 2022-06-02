import { DescriptiveError, ErrorResponse, SuccessResponse, User } from 'src/index';

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
    code: number;
    error: string;
    errors: DescriptiveError;
}