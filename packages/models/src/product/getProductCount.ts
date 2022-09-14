import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';

/**
 * API Path: /products/count
 * method: GET
 * response: GetProductCountResponse
 */

export interface GetProductCountSuccessResponse extends SuccessResponse {
  code: number;
  data: {
    count: number;
  };
}

export const enum GetProductCountErrorMessages {
  CAN_NOT_GET_PRODUCT_COUNT = 'CAN_NOT_GET_PRODUCT_COUNT',
}

export interface GetProductCountErrorResponse extends ErrorResponse {
  code?: number;
  error: GetProductCountErrorMessages;
  errors: DescriptiveError;
}

export type GetProductCountResponse =
  | GetProductCountSuccessResponse
  | GetProductCountErrorResponse;
