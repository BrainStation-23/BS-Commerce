import { DescriptiveError, ErrorResponse } from "src/common/errorResponse";
import { SuccessResponse } from "src/common/successResponse";
import { Cart } from "./cartCommon/cart";

export interface deleteAllCartItemsSuccessResponse extends SuccessResponse {
    code: number;
    data: Cart;
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