import { WishlistItem } from '../../../entity/wishList';
import { Helper } from '../../../helper/helper.interface';
import { WishListRepository } from '../repositories';
import { AddToWishlistResponse, getUserWishlistResponse, deleteWishlistResponse, deleteWishlistItemResponse, deleteAllWishlistItemsResponse, updateWishlistItemResponse } from '@bs-commerce/models';
export declare class WishListService {
    private wishListRepo;
    private helper;
    constructor(wishListRepo: WishListRepository, helper: Helper);
    addToWishList(userId: string, item: WishlistItem): Promise<AddToWishlistResponse>;
    getUserWishlist(userId: string): Promise<getUserWishlistResponse>;
    deleteWishlist(wishlistId: string): Promise<deleteWishlistResponse>;
    updateWishlistItem(item: WishlistItem, userId: string): Promise<updateWishlistItemResponse>;
    deleteWishlistItem(productId: string, userId: string): Promise<deleteWishlistItemResponse>;
    deleteAllWishlistItems(userId: string): Promise<deleteAllWishlistItemsResponse>;
}
