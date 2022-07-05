import { DescriptiveError, ErrorResponse } from "src/common/errorResponse";
import { SuccessResponse } from "src/common/successResponse";
import { Cart } from "./cartCommon/cart";

export interface getCartSuccessResponse extends SuccessResponse {
    code: number;
    data: Cart;
}

export interface getCartErrorResponse extends ErrorResponse { 
    code?: number;
    error: getCartErrorMessage;
    errors: DescriptiveError;
}
export const enum getCartErrorMessage{
    NO_CART_FOUND = 'NO_CART_FOUND',
}

export type getCartResponse = getCartSuccessResponse | getCartErrorResponse;