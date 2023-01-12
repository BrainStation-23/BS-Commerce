import { WishlistDto } from './wishlist.dto';
import { deleteWishlistItemErrorResponse, deleteWishlistItemSuccessResponse, deleteWishlistItemErrorMessage, DeleteWishlistItemParams } from '@bs-commerce/models';
export declare class deleteWishlistItemPramsDto implements DeleteWishlistItemParams {
    productId: string;
}
export declare class deleteWishlistItemSuccessResponseDto implements deleteWishlistItemSuccessResponse {
    code: number;
    data: WishlistDto;
}
export declare class deleteWishlistItemErrorResponseDto implements deleteWishlistItemErrorResponse {
    code: number;
    error: deleteWishlistItemErrorMessage;
    errors: string[];
}
