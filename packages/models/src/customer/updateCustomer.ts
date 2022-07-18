import { DescriptiveError, ErrorResponse, SuccessResponse, Customer } from 'src/index';

/**
 * API Path: /customer
 * method: PATCH
 * body: UpdateCustomerRequestBody
 * response: UpdateCustomerResponse
 */

export interface UpdateCustomerRequestBody {
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
}

export interface UpdateCustomerSuccessResponse extends SuccessResponse {
    code: number;
    data: Customer;
}

export const enum UpdateCustomerErrorMessages {
    CAN_NOT_UPDATE_CUSTOMER_INFORMATION = 'CAN_NOT_UPDATE_CUSTOMER_INFORMATION'
}

export interface UpdateCustomerErrorResponse extends ErrorResponse {
    code?: number;
    error: UpdateCustomerErrorMessages;
    errors: DescriptiveError;
}

export type UpdateCustomerResponse = UpdateCustomerSuccessResponse | UpdateCustomerErrorResponse;