import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
import { Wishlist } from './wishlist';

/**
 * API Path: /wishlist
 * method: POST
 * body: addToWishlistRequest
 * response: AddToWishlistResponse
 */

export interface addToWishlistRequest {
    productId: string;
    quantity: number;
}

export interface addToWishlistSuccessResponse extends SuccessResponse {
    code: number;
    data: Wishlist;
}

export interface addToWishlistErrorResponse extends ErrorResponse {
    code?: number;
    error: addToWishlistErrorMessage;
    errors: DescriptiveError;
}

export const enum addToWishlistErrorMessage {
    CAN_NOT_CREATE_WISHLIST = 'CAN_NOT_CREATE_WISHLIST',
    CAN_NOT_ADD_ITEM_TO_THE_WISHLIST = 'CAN_NOT_ADD_ITEM_TO_THE_WISHLIST',
    CAN_NOT_INCREMENT_WISHLIST_ITEM = 'CAN_NOT_INCREMENT_WISHLIST_ITEM',
}

export type AddToWishlistResponse = addToWishlistSuccessResponse | addToWishlistErrorResponse;
