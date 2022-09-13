import {
  DescriptiveError,
  ErrorResponse,
  ProductInfo,
  ProductPhoto,
  SuccessResponse,
} from 'src/index';

/**
 * API Path: /products/condition
 * method: GET
 * query: GetProductsByConditionQuery
 * response: GetProductsByConditionResponse
 */

export interface GetProductsByConditionQuery {
  skip?: number;
  limit?: number;
  brand?: string;
  categoryId?: string;
  productName?: string;
  isFeatured?: boolean;
  slug?: string;
  orderBy?: string;
}

export interface ConditionalProduct {
  info: ProductInfo;
  photos?: ProductPhoto[];
  brands?: string[];
}

export interface GetProductsObject {
  products: ConditionalProduct[];
  count: number;
}

export interface GetProductsByConditionSuccessResponse extends SuccessResponse {
  code: number;
  data: GetProductsObject;
}

export const enum GetProductsByConditionErrorMessages {
  CAN_NOT_GET_PRODUCTS = 'CAN_NOT_GET_PRODUCTS',
}

export interface GetProductsByConditionErrorResponse extends ErrorResponse {
  code?: number;
  error: GetProductsByConditionErrorMessages;
  errors: DescriptiveError;
}

export type GetProductsByConditionResponse =
  | GetProductsByConditionSuccessResponse
  | GetProductsByConditionErrorResponse;
