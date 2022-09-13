import {
  DescriptiveError,
  ErrorResponse,
  SuccessResponse,
  User,
} from 'src/index';
import { Address } from './address';

/**
 * API Path: /user
 * method: PATCH
 * body: UpdatedUserRequest
 * response: UpdateUserResponse
 */

export interface UpdatedUserRequest {
  firstName?: string;
  lastName?: string;
  provider?: string;
  providerData?: object;
  additionalProviderData?: object;
  phone?: string;
  address?: Address;
  active?: boolean;
  gender?: string;
  status?: string;
}

export interface UpdateUserSuccessResponse extends SuccessResponse {
  code: number;
  data: User;
}

export const enum UpdateUserErrorMessages {
  CAN_NOT_GET_USER = 'CAN_NOT_GET_USER',
  CAN_NOT_UPDATE_USER_ADDRESS = 'CAN_NOT_UPDATE_USER_ADDRESS',
  CAN_NOT_ADD_USER_NEW_ADDRESS = 'CAN_NOT_ADD_USER_NEW_ADDRESS',
  CAN_NOT_UPDATE_USER = 'CAN_NOT_UPDATE_USER',
}

export interface UpdateUserErrorResponse extends ErrorResponse {
  code?: number;
  error: UpdateUserErrorMessages;
  errors: DescriptiveError;
}

export type UpdateUserResponse =
  | UpdateUserSuccessResponse
  | UpdateUserErrorResponse;
