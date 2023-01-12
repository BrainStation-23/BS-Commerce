import { WishlistDto } from './wishlist.dto';
import { getUserWishlistErrorResponse, getUserWishlistSuccessResponse, getUserWishlistErrorMessage } from '@bs-commerce/models';
export declare class getUserWishlistSuccessResponseDto implements getUserWishlistSuccessResponse {
    code: number;
    data: WishlistDto;
}
export declare class getUserWishlistErrorResponseDto implements getUserWishlistErrorResponse {
    code: number;
    error: getUserWishlistErrorMessage;
    errors: string[];
}
