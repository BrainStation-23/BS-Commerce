import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
import { Product } from './product';

/**
 * API Path: /products/brand
 * method: PATCH
 * query: UpdateProductsForBrandQuery
 * response: UpdateProductsForBrandResponse
 */

export interface UpdateProductsForBrandRequest {
  productIds: string[];
  brandId: string;
}

export interface UpdateProductsForBrandSuccessResponse extends SuccessResponse {
  code: number;
  data: Product[];
}

export const enum UpdateProductsForBrandErrorMessages {
  CAN_NOT_UPDATE_PRODUCTS = 'CAN_NOT_UPDATE_PRODUCTS',
}

export interface UpdateProductsForBrandErrorResponse extends ErrorResponse {
  code?: number;
  error: UpdateProductsForBrandErrorMessages;
  errors: DescriptiveError;
}

export type UpdateProductsForBrandResponse =
  | UpdateProductsForBrandSuccessResponse
  | UpdateProductsForBrandErrorResponse;
