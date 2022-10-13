import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
import { Store } from './store';

/**
 * API Path: /store/:storeId
 * method: GET
 * params: storeId
 * response: GetStoreResponse
 */

export interface GetStoreParams {
  storeId: string;
}

export interface GetStoreSuccessResponse extends SuccessResponse {
  code: number;
  data: Store;
}

export const enum GetStoreErrorMessages {
  NO_STORE_FOUND = 'NO_STORE_FOUND',
}

export interface GetStoreErrorResponse extends ErrorResponse {
  code?: number;
  error: GetStoreErrorMessages;
  errors: DescriptiveError;
}

export type GetStoreResponse = GetStoreSuccessResponse | GetStoreErrorResponse;
