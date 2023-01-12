import { Response } from 'express';
import { WishListService } from '../services';
import { User } from '../../../entity/user';
import { AddToWishlistRequestDto, deleteWishlistItemPramsDto, deleteWishlistPramsDto, updateWishlistItemRequestBodyDto } from './dto';
export declare class WishListController {
    private wishListService;
    constructor(wishListService: WishListService);
    addToWishList(item: AddToWishlistRequestDto, user: User, res: Response): Promise<{
        data: import("@bs-commerce/models").Wishlist;
    } | {
        error: import("@bs-commerce/models").addToWishlistErrorMessage;
        errors: DescriptiveError;
    }>;
    getUserWishlist(user: User, res: Response): Promise<{
        data: import("@bs-commerce/models").Wishlist;
    } | {
        error: import("@bs-commerce/models").getUserWishlistErrorMessage;
        errors: DescriptiveError;
    }>;
    updateWishlistItem(item: updateWishlistItemRequestBodyDto, user: User, res: Response): Promise<{
        data: import("@bs-commerce/models").Wishlist;
    } | {
        error: import("@bs-commerce/models").updateWishlistItemErrorMessage;
        errors: DescriptiveError;
    }>;
    deleteWishlistItem(params: deleteWishlistItemPramsDto, user: User, res: Response): Promise<{
        data: import("@bs-commerce/models").Wishlist;
    } | {
        error: import("@bs-commerce/models").deleteWishlistItemErrorMessage;
        errors: DescriptiveError;
    }>;
    deleteAllWishlistItems(user: User, res: Response): Promise<{
        data: {
            message?: string;
        };
    } | {
        error: import("@bs-commerce/models").deleteAllWishlistItemsErrorMessage;
        errors: DescriptiveError;
    }>;
    deleteWishlist(params: deleteWishlistPramsDto, res: Response): Promise<{
        data: {
            message?: string;
        };
    } | {
        error: import("@bs-commerce/models").deleteWishlistErrorMessage;
        errors: DescriptiveError;
    }>;
}
