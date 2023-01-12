import { WishlistItem, WishList } from '../../../entity/wishList';
export declare abstract class IWishListDatabase {
    abstract getWishlistProduct: (wishlist: WishList) => Promise<WishList | null>;
    abstract incrementItemQuantity: (userId: string, item: WishlistItem) => Promise<WishList | null>;
    abstract addWishListItem: (userId: string, item: WishlistItem) => Promise<WishList | null>;
    abstract createWishList: (wishList: WishList) => Promise<WishList | null>;
    abstract getWishList: (query: Record<string, any>) => Promise<WishList | null>;
    abstract deleteWishList: (wishlistId: string) => Promise<WishList | null>;
    abstract updateWishlistItem: (userId: string, item: WishlistItem) => Promise<WishList | null>;
    abstract deleteWishlistItem: (userId: string, productId: string) => Promise<WishList | null>;
    abstract deleteAllWishlistItems: (userId: string) => Promise<WishList | null>;
}
