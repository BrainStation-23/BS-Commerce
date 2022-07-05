import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
import { Wishlist } from './wishlist';

/**
 * API Path: customer/wishlist
 * method: GET
 * response: getUserWishlistResponse
 */

export interface getUserWishlistSuccessResponse extends SuccessResponse {
    code: number;
    data: Wishlist;
}

export interface getUserWishlistErrorResponse extends ErrorResponse {
    code?: number;
    error: getUserWishlistErrorMessage;
    errors: DescriptiveError;
}

export const enum getUserWishlistErrorMessage {
    NO_WISHLIST_FOUND = 'NO_WISHLIST_FOUND',
}

export type getUserWishlistResponse = getUserWishlistSuccessResponse | getUserWishlistErrorResponse;
