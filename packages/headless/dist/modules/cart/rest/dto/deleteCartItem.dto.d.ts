import { Cart, deleteCartItemErrorMessage, deleteCartItemErrorResponse, deleteCartItemRequest, deleteCartItemSuccessResponse, ResponseItem } from '@bs-commerce/models';
import { CartProductDto } from './cartProductDto';
export declare class deleteCartItemRequestDto implements deleteCartItemRequest {
    productId: string;
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
export declare class deleteCartItemSuccessResponseDto implements deleteCartItemSuccessResponse {
    code: number;
    data: CartDto;
}
export declare class deleteCartItemErrorResponseDto implements deleteCartItemErrorResponse {
    code: number;
    error: deleteCartItemErrorMessage;
    errors: string[];
}
export {};
