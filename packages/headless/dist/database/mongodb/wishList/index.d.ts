import { WishList, WishlistItem } from '../../../entity/wishList';
import { IWishListDatabase } from '../../../modules/wishlist/repositories/wishList.database.interface';
export declare class WishListDatabase implements IWishListDatabase {
    getWishlistProduct(wishlist: WishList): Promise<WishList | null>;
    incrementItemQuantity(userId: string, item: WishlistItem): Promise<WishList | null>;
    addWishListItem(userId: string, item: WishlistItem): Promise<WishList | null>;
    createWishList(wishlist: WishList): Promise<WishList | null>;
    getWishList(query: Record<string, any>): Promise<WishList | null>;
    deleteWishList(wishlistId: string): Promise<WishList | null>;
    updateWishlistItem(userId: string, item: WishlistItem): Promise<WishList | null>;
    deleteWishlistItem(userId: string, productId: string): Promise<WishList | null>;
    deleteAllWishlistItems(userId: string): Promise<WishList | null>;
}
