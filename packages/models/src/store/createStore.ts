import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
import { Store } from './store';

/**
 * API Path: /store
 * method: POST
 * body: CreateStoreRequestBody
 * response: CreateStoreResponse
 */

export interface CreateStoreAddress {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  country: string;
  postCode: string;
}

export interface CreateStoreRequestBody {
  info: {
    shopName: string;
    description?: string;
    legalName: string;
  };
  image?: {
    logo?: string;
    cover?: string;
  };
  address: CreateStoreAddress;
  admin: {
    name: string;
    email: string;
    phone?: string;
    password: string;
  };
  isActive: boolean;
}

export interface CreateStoreSuccessResponse extends SuccessResponse {
  code: number;
  data: Store;
}

export const enum CreateStoreErrorMessages {
  STORE_SHOP_NAME_EXISTS = 'STORE_SHOP_NAME_EXISTS',
  STORE_LEGAL_NAME_EXISTS = 'STORE_LEGAL_NAME_EXISTS',
  CAN_NOT_CREATE_STORE = 'CAN_NOT_CREATE_STORE',
}

export interface CreateStoreErrorResponse extends ErrorResponse {
  code?: number;
  error: CreateStoreErrorMessages;
  errors: DescriptiveError;
}

export type CreateStoreResponse =
  | CreateStoreSuccessResponse
  | CreateStoreErrorResponse;
