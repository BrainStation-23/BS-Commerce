import { DescriptiveError, ErrorResponse, SuccessResponse, Customer } from 'src/index';

/**
 * API Path: /customer/add-address
 * method: PUT
 * body: CustomerAddress
 * response: AddCustomerNewAddressResponse
 */

export interface AddCustomerNewAddressSuccessResponse extends SuccessResponse {
    code: number;
    data: Customer;
}

export const enum AddCustomerNewAddressErrorMessages {
    CAN_NOT_ADD_CUSTOMER_NEW_ADDRESS = 'CAN_NOT_ADD_CUSTOMER_NEW_ADDRESS',
}

export interface AddCustomerNewAddressErrorResponse extends ErrorResponse {
    code?: number;
    error: AddCustomerNewAddressErrorMessages;
    errors: DescriptiveError;
}

export type AddCustomerNewAddressResponse = AddCustomerNewAddressSuccessResponse | AddCustomerNewAddressErrorResponse;