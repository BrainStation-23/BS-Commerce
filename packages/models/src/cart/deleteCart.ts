import { DescriptiveError, ErrorResponse } from "src/common/errorResponse";
import { SuccessResponse } from "src/common/successResponse";
import { Cart } from "./cartCommon/cart";

export interface deleteCartRequest {
    cartId: string;
}
export interface deleteCartSuccessResponse extends SuccessResponse {
    code: number;
    data: Cart;
}

export interface deleteCartErrorResponse extends ErrorResponse {
    code?: number;
    error: deleteCartErrorMessage;
    errors: DescriptiveError;
}
export const enum deleteCartErrorMessage {
    CAN_NOT_REMOVE_CART = 'CAN_NOT_REMOVE_CART',
}

export type deleteCartResponse = deleteCartSuccessResponse | deleteCartErrorResponse;