import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
import { CustomerProduct } from './customerProduct';

/**
 * API Path: /customer/home-page-products
 * method: GET
 * response: GetCustomerAllHomePageProductsResponse
 */

export interface GetCustomerAllHomePageProductsSuccessResponse
  extends SuccessResponse {
  code: number;
  data: CustomerProduct[];
}

export const enum GetCustomerAllHomePageProductsErrorMessages {
  NO_PRODUCTS_FOUND = 'NO_PRODUCTS_FOUND',
}

export interface GetCustomerAllHomePageProductsErrorResponse
  extends ErrorResponse {
  code?: number;
  error: GetCustomerAllHomePageProductsErrorMessages;
  errors: DescriptiveError;
}

export type GetCustomerAllHomePageProductsResponse =
  | GetCustomerAllHomePageProductsSuccessResponse
  | GetCustomerAllHomePageProductsErrorResponse;
