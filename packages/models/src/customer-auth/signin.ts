import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';

/**
 * API Path: /customer/auth/sign-in
 * method: POST
 * body: CustomerSignInRequest
 * response: CustomerSignInResponse
 */

export interface CustomerSignInRequest {
    phone?: string;
    email?: string;
    password: string;
}

export interface CustomerSignInSuccessResponse extends SuccessResponse {
    code: number;
    data: {
        token: string
    };
}

export const enum CustomerSignInErrorMessages {
    INVALID_CREDENTIALS = 'INVALID_CREDENTIALS'
}

export interface CustomerSignInErrorResponse extends ErrorResponse {
    code?: number;
    error: CustomerSignInErrorMessages;
    errors: DescriptiveError;
}

export type CustomerSignInResponse = CustomerSignInSuccessResponse | CustomerSignInErrorResponse;