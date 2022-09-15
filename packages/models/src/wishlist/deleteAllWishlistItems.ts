import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';

/**
 * API Path: /wishlist/:wishlistId
 * method: DELETE
 * params: wishlistId
 * response: deleteAllWishlistItemsResponse
 */

export interface deleteAllWishlistItemsSuccessResponse extends SuccessResponse {
  code: number;
  data: {
    message?: string;
  };
}

export const enum deleteAllWishlistItemsSuccessMessage {
  WISHLIST_ITEMS_DELETED_SUCCESSFUL = 'WISHLIST_ITEMS_DELETED_SUCCESSFUL',
}

export interface deleteAllWishlistItemsErrorResponse extends ErrorResponse {
  code?: number;
  error: deleteAllWishlistItemsErrorMessage;
  errors: DescriptiveError;
}

export const enum deleteAllWishlistItemsErrorMessage {
  CAN_NOT_DELETE_ALL_WISHLIST_ITEMS = 'CAN_NOT_DELETE_ALL_WISHLIST_ITEMS',
}

export type deleteAllWishlistItemsResponse =
  | deleteAllWishlistItemsSuccessResponse
  | deleteAllWishlistItemsErrorResponse;
