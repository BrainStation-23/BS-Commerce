import { DescriptiveError, ErrorResponse } from 'src/common/errorResponse';
import { SuccessResponse } from 'src/common/successResponse';
import { Cart } from './cartCommon/cart';

export interface updateCartItemRequest {
  productId?: string;
  quantity?: number;
}

export interface updateCartItemSuccessResponse extends SuccessResponse {
  code: number;
  data: Cart;
}

export interface updateCartItemErrorResponse extends ErrorResponse {
  code?: number;
  error: updateCartItemErrorMessage;
  errors: DescriptiveError;
}

export const enum updateCartItemErrorMessage {
  CAN_NOT_UPDATE_CART_ITEM = 'CAN_NOT_UPDATE_CART_ITEM',
  CAN_NOT_REMOVE_CART_ITEM = 'CAN_NOT_REMOVE_CART_ITEM',
}

export type updateCartItemResponse =
  | updateCartItemSuccessResponse
  | updateCartItemErrorResponse;
