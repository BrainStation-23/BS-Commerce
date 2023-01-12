import { deleteAllCartItems, deleteAllCartItemsErrorMessage, deleteAllCartItemsErrorResponse, deleteAllCartItemsSuccessResponse } from '@bs-commerce/models';
declare class deleteAllCartItemsDto implements deleteAllCartItems {
    id?: string;
    userId?: string;
    items?: [];
}
export declare class deleteAllCartItemsSuccessResponseDto implements deleteAllCartItemsSuccessResponse {
    code: number;
    data: deleteAllCartItemsDto;
}
export declare class deleteAllCartItemsErrorResponseDto implements deleteAllCartItemsErrorResponse {
    code: number;
    error: deleteAllCartItemsErrorMessage;
    errors: string[];
}
export {};
