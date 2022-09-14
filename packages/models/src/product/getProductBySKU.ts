import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
import { Product } from './product';

/**
 * API Path: /products/sku/:sku
 * method: GET
 * params: sku
 * response: GetProductBySKUResponse
 */

export interface GetProductBySKUParams {
  sku: string;
}

export interface GetProductBySKUSuccessResponse extends SuccessResponse {
  code: number;
  data: Product;
}

export const enum GetProductBySKUErrorMessages {
  CAN_NOT_GET_PRODUCT = 'CAN_NOT_GET_PRODUCT',
}

export interface GetProductBySKUErrorResponse extends ErrorResponse {
  code?: number;
  error: GetProductBySKUErrorMessages;
  errors: DescriptiveError;
}

export type GetProductBySKUResponse =
  | GetProductBySKUSuccessResponse
  | GetProductBySKUErrorResponse;
