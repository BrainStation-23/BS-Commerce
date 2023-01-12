import { Cart, updateCartItemErrorMessage, updateCartItemErrorResponse, ResponseItem, updateCartItemRequest, updateCartItemSuccessResponse } from '@bs-commerce/models';
import { CartProductDto } from './cartProductDto';
export declare class updateCartItemRequestDto implements updateCartItemRequest {
    productId?: string;
    quantity?: number;
}
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
export declare class updateCartItemSuccessResponseDto implements updateCartItemSuccessResponse {
    code: number;
    data: CartDto;
}
export declare class updateCartItemErrorResponseDto implements updateCartItemErrorResponse {
    code: number;
    error: updateCartItemErrorMessage;
    errors: string[];
}
export {};
