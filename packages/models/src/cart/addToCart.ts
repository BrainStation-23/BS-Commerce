import { DescriptiveError, ErrorResponse } from "src/common/errorResponse";
import { SuccessResponse } from "src/common/successResponse";
import { Cart } from "./cart";
import { Item } from "./item";

export interface addToCartRequest {
    item: Item;
}

export interface addToCartSuccessResponse extends SuccessResponse {
    code: number;
    data: Cart
}

export interface addToCartErrorResponse extends ErrorResponse { 
    code?: number;
    error: ErrorMessage.CANNOT_CREATE_CART | ErrorMessage.CANNOT_ADD_ITEM_TO_THE_CART | ErrorMessage.CANNOT_INCREMENT_CART_ITEM;
    errors: DescriptiveError;
}

export const enum ErrorMessage{
    CANNOT_CREATE_CART = 'CANNOT_CREATE_CART',
    CANNOT_ADD_ITEM_TO_THE_CART='CANNOT_ADD_ITEM_TO_THE_CART',
    CANNOT_INCREMENT_CART_ITEM='CANNOT_INCREMENT_CART_ITEM',
}
export type AddToCartResponse = addToCartSuccessResponse | addToCartErrorResponse;