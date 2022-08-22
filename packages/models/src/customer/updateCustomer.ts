import { DescriptiveError, ErrorResponse, SuccessResponse, Customer } from 'src/index';

/**
 * API Path: /customer
 * method: PATCH
 * body: UpdateCustomerRequestBody
 * response: UpdateCustomerResponse
 */

export interface UpdateCustomerRequestBody {
    name?: string;
    phone?: string;
    email?: string;
}

export interface UpdateCustomerSuccessResponse extends SuccessResponse {
    code: number;
    data: Customer;
}

export const enum UpdateCustomerErrorMessages {
    CAN_NOT_UPDATE_CUSTOMER_INFORMATION = 'CAN_NOT_UPDATE_CUSTOMER_INFORMATION',
    CAN_NOT_CHANGE_EXISTING_EMAIL = 'CAN_NOT_CHANGE_EXISTING_EMAIL',
    CAN_NOT_CHANGE_EXISTING_PHONE = 'CAN_NOT_CHANGE_EXISTING_PHONE',
    TIME_LIMIT_EXCEED_OR_UNVERIFIED_CUSTOMER = 'TIME_LIMIT_EXCEED_OR_UNVERIFIED_CUSTOMER'
}

export interface UpdateCustomerErrorResponse extends ErrorResponse {
    code?: number;
    error: UpdateCustomerErrorMessages;
    errors: DescriptiveError;
}

export type UpdateCustomerResponse = UpdateCustomerSuccessResponse | UpdateCustomerErrorResponse;