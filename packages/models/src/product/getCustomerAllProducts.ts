import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
import { CustomerProduct } from './customerProduct';

/**
 * API Path: /customer/products
 * method: GET
 * query: GetCustomerAllProductsQuery
 * response: GetCustomerAllProductsResponse
 */

export interface GetCustomerAllProductsQuery {
  skip?: number;
  limit?: number;
  brand?: string;
  manufacturer?: string;
  categoryId?: string;
  productName?: string;
  isFeatured?: boolean;
  slug?: string;
  orderBy?: string;
  minPrice?: number;
  maxPrice?: number;
}

export interface GetCustomerAllProductsResponseType {
  products: CustomerProduct[];
  manufacturers: string[];
  brands: string[];
  totalProducts: number;
}

export interface GetCustomerAllProductsSuccessResponse extends SuccessResponse {
  code: number;
  data: GetCustomerAllProductsResponseType;
}

export const enum GetCustomerAllProductsErrorMessages {
  CAN_NOT_GET_ALL_PRODUCTS = 'CAN_NOT_GET_ALL_PRODUCTS',
}

export interface GetCustomerAllProductsErrorResponse extends ErrorResponse {
  code?: number;
  error: GetCustomerAllProductsErrorMessages;
  errors: DescriptiveError;
}

export type GetCustomerAllProductsResponse =
  | GetCustomerAllProductsSuccessResponse
  | GetCustomerAllProductsErrorResponse;
