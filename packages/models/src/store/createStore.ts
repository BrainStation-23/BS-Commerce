import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
import { Store } from './store';

/**
 * API Path: /stores/create-store
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

interface IStoreAdminSignupReq {
	id?: string;
	firstName: string;
	lastName: string;
	roleId?: string;
	branchId?: string[];
	email: string;
	countryCode?: string;
	phone?: string;
	password?: string;
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
  admin: IStoreAdminSignupReq;
  isActive: boolean;
}

export interface CreateStoreSuccessResponse extends SuccessResponse {
  code: number;
  data: Store;
}

export const enum CreateStoreErrorMessages {
  STORE_SHOP_NAME_EXISTS = 'STORE_SHOP_NAME_EXISTS',
  EMAIL_ALREADY_USED = 'EMAIL_ALREADY_USED',
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
