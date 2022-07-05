import { DescriptiveError, ErrorResponse } from "src/common/errorResponse";
import { SuccessResponse } from "src/common/successResponse";

export interface deleteAllCartItems{
    id?: string;
    userId?: string;
    items?: [];
}

export interface deleteAllCartItemsSuccessResponse extends SuccessResponse {
    code: number;
    data: deleteAllCartItems;
}

export interface deleteAllCartItemsErrorResponse extends ErrorResponse {
    code?: number;
    error: deleteAllCartItemsErrorMessage;
    errors: DescriptiveError;
}
export const enum deleteAllCartItemsErrorMessage {
    CAN_NOT_REMOVE_ALL_CART_ITEMS = 'CAN_NOT_REMOVE_ALL_CART_ITEMS',
}

export type deleteAllCartItemsResponse = deleteAllCartItemsSuccessResponse | deleteAllCartItemsErrorResponse;