import { deleteWishlistErrorResponse, deleteWishlistSuccessResponse, deleteWishlistErrorMessage, DeleteWishlistParams } from '@bs-commerce/models';
export declare class deleteWishlistPramsDto implements DeleteWishlistParams {
    wishlistId: string;
}
declare class SuccessMessage {
    message: string;
}
export declare class deleteWishlistSuccessResponseDto implements deleteWishlistSuccessResponse {
    code: number;
    data: SuccessMessage;
}
export declare class deleteWishlistErrorResponseDto implements deleteWishlistErrorResponse {
    code: number;
    error: deleteWishlistErrorMessage;
    errors: string[];
}
export {};
