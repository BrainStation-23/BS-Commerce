import { WishlistDto } from './wishlist.dto';
import { updateWishlistItemErrorResponse, updateWishlistItemRequestBody, updateWishlistItemSuccessResponse, updateWishlistItemErrorMessage } from '@bs-commerce/models';
export declare class updateWishlistItemRequestBodyDto implements updateWishlistItemRequestBody {
    productId: string;
    quantity: number;
}
export declare class updateWishlistItemSuccessResponseDto implements updateWishlistItemSuccessResponse {
    code: number;
    data: WishlistDto;
}
export declare class updateWishlistItemErrorResponseDto implements updateWishlistItemErrorResponse {
    code: number;
    error: updateWishlistItemErrorMessage;
    errors: string[];
}
