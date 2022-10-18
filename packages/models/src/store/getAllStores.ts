import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
import { Store } from './store';

/**
 * API Path: /stores
 * method: GET
 * query: GetAllStoresQuery
 * response: GetAllStoresResponse
 */

 export interface GetAllStoresQuery {
  skip: number;
  limit: number;
  isActive?: boolean;
  url?: string;
  legalName?: string;
  adminEmail?: string;
}

export interface GetAllStoresSuccessResponse extends SuccessResponse {
  code: number;
  data: Store[];
}

export const enum GetAllStoresErrorMessages {
  NO_STORES_FOUND = 'NO_STORES_FOUND',
}

export interface GetAllStoresErrorResponse extends ErrorResponse {
  code?: number;
  error: GetAllStoresErrorMessages;
  errors: DescriptiveError;
}

export type GetAllStoresResponse = GetAllStoresSuccessResponse | GetAllStoresErrorResponse;
