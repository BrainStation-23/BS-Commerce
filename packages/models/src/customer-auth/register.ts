import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';

/**
 * API Path: /customer/auth/register
 * method: POST
 * body: CreateCustomerRequest
 * response: CreateCustomerResponse
 */

export interface CreateCustomerRequest {
    phone?: string;
    email?: string;
    otp: number;
    name: string;
    password: string;
}

export const enum CreateCustomerSuccessMessages {
    CUSTOMER_CREATED_SUCCESSFUL = 'CUSTOMER_CREATED_SUCCESSFUL',
}

export interface CreateCustomerSuccessResponse extends SuccessResponse {
    code: number;
    data: {
        message?: CreateCustomerSuccessMessages
    };
}

export const enum CreateCustomerErrorMessages {
    CUSTOMER_PHONE_ALREADY_EXITS = 'CUSTOMER_PHONE_ALREADY_EXITS',
    CUSTOMER_EMAIL_ALREADY_EXITS = 'CUSTOMER_EMAIL_ALREADY_EXITS',
    TIME_LIMIT_EXCEED_OR_UNVERIFIED_CUSTOMER = 'TIME_LIMIT_EXCEED_OR_UNVERIFIED_CUSTOMER',
    CAN_NOT_CREATE_CUSTOMER = 'CAN_NOT_CREATE_CUSTOMER',
    OTP_EXPIRED = 'OTP_EXPIRED'
}

export interface CreateCustomerErrorResponse extends ErrorResponse {
    code?: number;
    error: CreateCustomerErrorMessages;
    errors: DescriptiveError;
}

export type CreateCustomerResponse = CreateCustomerSuccessResponse | CreateCustomerErrorResponse;