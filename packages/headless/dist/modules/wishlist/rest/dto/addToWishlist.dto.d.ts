import { WishlistDto } from './wishlist.dto';
import { addToWishlistErrorResponse, addToWishlistRequest, addToWishlistSuccessResponse, addToWishlistErrorMessage } from '@bs-commerce/models';
export declare class AddToWishlistRequestDto implements addToWishlistRequest {
    productId: string;
    quantity: number;
}
export declare class AddToWishlistSuccessResponseDto implements addToWishlistSuccessResponse {
    code: number;
    data: WishlistDto;
}
export declare class AddToWishlistErrorResponseDto implements addToWishlistErrorResponse {
    code: number;
    error: addToWishlistErrorMessage;
    errors: string[];
}
