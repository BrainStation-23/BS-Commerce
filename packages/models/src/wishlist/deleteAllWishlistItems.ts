import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';

/**
 * API Path: /wishlist/:wishlistId
 * method: DELETE
 * params: wishlistId
 * response: deleteAllWishlistItemsResponse
 */


interface Message {
    message: string
}

export interface deleteAllWishlistItemsSuccessResponse extends SuccessResponse {
    code: number;
    data: Message;
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

export type deleteAllWishlistItemsResponse = deleteAllWishlistItemsSuccessResponse | deleteAllWishlistItemsErrorResponse;
