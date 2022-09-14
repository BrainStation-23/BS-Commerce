import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
import { Product } from './product';
/**
 * API Path: customer/product/:url
 * method: GET
 * params: sku
 * response: GetCustomerProductByURLResponse
 */
export interface GetCustomerProductByURLParams {
  url: string;
}
export interface GetCustomerProductByURLSuccessResponse
  extends SuccessResponse {
  code: number;
  data: Product;
}
export declare const enum GetCustomerProductByURLErrorMessages {
  CAN_NOT_GET_PRODUCT = 'CAN_NOT_GET_PRODUCT',
}
export interface GetCustomerProductByURLErrorResponse extends ErrorResponse {
  code?: number;
  error: GetCustomerProductByURLErrorMessages;
  errors: DescriptiveError;
}
export declare type GetCustomerProductByURLResponse =
  | GetCustomerProductByURLSuccessResponse
  | GetCustomerProductByURLErrorResponse;
