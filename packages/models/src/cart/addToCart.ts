import { DescriptiveError, ErrorResponse } from "src/common/errorResponse";
import { SuccessResponse } from "src/common/successResponse";
import { Cart } from "./cartCommon/cart";

export interface addToCartRequest {
    productId: string;
    quantity: number;
}

export interface addToCartSuccessResponse extends SuccessResponse {
    code: number;
    data: Cart
}

export interface addToCartErrorResponse extends ErrorResponse {
    code?: number;
    error: addToCartErrorMessage;
    errors: DescriptiveError;
}

export const enum addToCartErrorMessage {
    CAN_NOT_CREATE_CART = 'CAN_NOT_CREATE_CART',
    CAN_NOT_ADD_ITEM_TO_THE_CART = 'CAN_NOT_ADD_ITEM_TO_THE_CART',
    CAN_NOT_INCREMENT_CART_ITEM = 'CAN_NOT_INCREMENT_CART_ITEM',
}

export type AddToCartResponse = addToCartSuccessResponse | addToCartErrorResponse;
