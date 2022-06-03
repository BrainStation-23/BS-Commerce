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
    error: 'Can\'t create cart' | 'Can\'t add item to the cart' | 'Can\'t increment cart item';
    errors: DescriptiveError;
}

export type AddToCartResponse = addToCartSuccessResponse | addToCartErrorResponse;