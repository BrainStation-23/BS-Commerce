import { Cart, getCartErrorMessage, getCartErrorResponse, getCartSuccessResponse, ResponseItem } from '@bs-commerce/models';
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
export declare class getCartSuccessResponseDto implements getCartSuccessResponse {
    code: number;
    data: CartDto;
}
export declare class getCartErrorResponseDto implements getCartErrorResponse {
    code: number;
    error: getCartErrorMessage;
    errors: string[];
}
export {};
