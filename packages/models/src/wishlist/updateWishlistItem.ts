import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
import { Wishlist } from './wishlist';

/**
 * API Path: /wishlist/item
 * method: PATCH
 * body: updateWishlistItemRequestBody
 * response: updateWishlistItemResponse
 */

export interface updateWishlistItemRequestBody {
  productId: string;
  quantity: number;
}

export interface updateWishlistItemSuccessResponse extends SuccessResponse {
  code: number;
  data: Wishlist;
}

export interface updateWishlistItemErrorResponse extends ErrorResponse {
  code?: number;
  error: updateWishlistItemErrorMessage;
  errors: DescriptiveError;
}

export const enum updateWishlistItemErrorMessage {
  CAN_NOT_DELETE_WISHLIST_ITEM = 'CAN_NOT_DELETE_WISHLIST_ITEM',
  CAN_NOT_UPDATE_WISHLIST_ITEM = 'CAN_NOT_UPDATE_WISHLIST_ITEM',
}

export type updateWishlistItemResponse =
  | updateWishlistItemSuccessResponse
  | updateWishlistItemErrorResponse;
