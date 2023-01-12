import { deleteAllWishlistItemsErrorResponse, deleteAllWishlistItemsSuccessResponse, deleteAllWishlistItemsErrorMessage } from '@bs-commerce/models';
declare class DeleteAllWishlistItemsSuccessMessage {
    message: string;
}
export declare class deleteAllWishlistItemsSuccessResponseDto implements deleteAllWishlistItemsSuccessResponse {
    code: number;
    data: DeleteAllWishlistItemsSuccessMessage;
}
export declare class deleteAllWishlistItemsErrorResponseDto implements deleteAllWishlistItemsErrorResponse {
    code: number;
    error: deleteAllWishlistItemsErrorMessage;
    errors: string[];
}
export {};
