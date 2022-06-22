import { Customer, DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';

/**
 * API Path: /customer/auth
 * method: GET
 * body: GetCustomerRequest
 * response: GetCustomerResponse
 */

export interface GetCustomerQuery{
    phone?: string;
    email?: string;
}

export interface GetCustomerSuccessResponse extends SuccessResponse {
    code: number;
    data: Customer
}

export const enum GetCustomerErrorMessages {
    CAN_NOT_GET_CUSTOMER = 'CAN_NOT_GET_CUSTOMER'
}

export interface GetCustomerErrorResponse extends ErrorResponse {
    code?: number;
    error: GetCustomerErrorMessages;
    errors: DescriptiveError;
}

export type GetCustomerResponse = GetCustomerSuccessResponse | GetCustomerErrorResponse;