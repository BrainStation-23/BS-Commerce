import { DescriptiveError, ErrorResponse } from "src/common/errorResponse";
import { SuccessResponse } from "src/common/successResponse";
import { Cart } from "./cartCommon/cart";

export interface deleteCartItemRequest {
    productId: string;
}

export interface deleteCartItemSuccessResponse extends SuccessResponse {
    code: number;
    data: Cart;
}

export interface deleteCartItemErrorResponse extends ErrorResponse { 
    code?: number;
    error: deleteCartItemErrorMessage;
    errors: DescriptiveError;
}
export const enum deleteCartItemErrorMessage{
    CAN_NOT_REMOVE_CART_ITEM = 'CAN_NOT_REMOVE_CART_ITEM',
}

export type deleteCartItemResponse = deleteCartItemSuccessResponse | deleteCartItemErrorResponse;