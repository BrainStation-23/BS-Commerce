import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
import { Wishlist } from './wishlist';

/**
 * API Path: /wishlist/items/:productId
 * method: DELETE
 * params: productId
 * response: deleteWishlistItemResponse
 */

export interface DeleteWishlistItemParams {
    productId: string
}

export interface deleteWishlistItemSuccessResponse extends SuccessResponse {
    code: number;
    data: Wishlist;
}

export interface deleteWishlistItemErrorResponse extends ErrorResponse {
    code?: number;
    error: deleteWishlistItemErrorMessage;
    errors: DescriptiveError;
}

export const enum deleteWishlistItemErrorMessage {
    CAN_NOT_DELETE_WISHLIST_ITEM = 'CAN_NOT_DELETE_WISHLIST_ITEM',
}

export type deleteWishlistItemResponse = deleteWishlistItemSuccessResponse | deleteWishlistItemErrorResponse;