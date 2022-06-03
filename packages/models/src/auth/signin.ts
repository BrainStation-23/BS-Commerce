import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';

export interface SignInRequest {
    username: string;
    password: string;
}

export interface Token {
    token: string;
}

export interface SignInSuccessResponse extends SuccessResponse {
    code: number;
    data: Token;
}

export interface SignInErrorResponse extends ErrorResponse {
    code: number;
    error: string;
    errors: DescriptiveError;
}


export type SignInResponse = SignInSuccessResponse | SignInErrorResponse;