import {
  DescriptiveError,
  ErrorResponse,
  SuccessResponse,
  Customer,
} from 'src/index';

/**
 * API Path: /customer/update-address/:addressId
 * method: PATCH
 * params: addressId
 * body: CustomerAddress
 * response: UpdateCustomerAddressResponse
 */

export interface UpdateCustomerAddressParams {
  addressId: string;
}

export interface UpdateCustomerAddressSuccessResponse extends SuccessResponse {
  code: number;
  data: Customer;
}

export const enum UpdateCustomerAddressErrorMessages {
  CAN_NOT_UPDATE_CUSTOMER_ADDRESS = 'CAN_NOT_UPDATE_CUSTOMER_ADDRESS',
  CUSTOMER_EMAIL_MATCH = 'CUSTOMER_EMAIL_MATCH',
  CUSTOMER_PHONE_MATCH = 'CUSTOMER_PHONE_MATCH',
}

export interface UpdateCustomerAddressErrorResponse extends ErrorResponse {
  code?: number;
  error: UpdateCustomerAddressErrorMessages;
  errors: DescriptiveError;
}

export type UpdateCustomerAddressResponse =
  | UpdateCustomerAddressSuccessResponse
  | UpdateCustomerAddressErrorResponse;
