import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';

/**
 * API Path: /auth/signin
 * method: POST
 * body: SignInRequest
 * response: SignInResponse
 */

export interface SignInRequest {
    username: string;
    password: string;
}

export interface Token {
    token?: string;
}

export interface SignInSuccessResponse extends SuccessResponse {
    code: number;
    data: Token;
}

export interface SignInErrorResponse extends ErrorResponse {
    code?: number;
    error: 'INVALID_CREDENTIALS';
    errors: DescriptiveError;
}

export type SignInResponse = SignInSuccessResponse | SignInErrorResponse;