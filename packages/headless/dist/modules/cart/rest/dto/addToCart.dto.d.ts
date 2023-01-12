import { Cart, ResponseItem, addToCartErrorResponse, addToCartRequest, addToCartSuccessResponse, addToCartErrorMessage } from '@bs-commerce/models';
import { CartProductDto } from './cartProductDto';
declare class ResponseItemDto implements ResponseItem {
    product?: CartProductDto;
    productId: string;
    quantity: number;
}
declare class CartDto implements Cart {
    id?: string;
    userId?: string;
    items?: ResponseItemDto[];
}
export declare class AddToCartSuccessResponseDto implements addToCartSuccessResponse {
    code: number;
    data: CartDto;
}
export declare class AddToCartRequestDto implements addToCartRequest {
    productId: string;
    quantity: number;
}
export declare class AddToCartErrorResponseDto implements addToCartErrorResponse {
    code: number;
    error: addToCartErrorMessage;
    errors: string[];
}
export {};
