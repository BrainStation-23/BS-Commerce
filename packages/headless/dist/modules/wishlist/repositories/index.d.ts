import { IWishListDatabase } from './wishList.database.interface';
import { WishlistItem, WishList } from '../../../entity/wishList';
export declare class WishListRepository {
    private readonly db;
    constructor(db: IWishListDatabase);
    doesItemExist(userId: string, productId: string): Promise<WishList | null>;
    incrementItemQuantity(userId: string, item: WishlistItem): Promise<WishList | null>;
    addItem(userId: string, item: WishlistItem): Promise<WishList | null>;
    createWishlist(wishList: WishList): Promise<WishList | null>;
    getUserWishlist(userId: string): Promise<WishList | null>;
    getWishlistProduct(wishlist: WishList): Promise<WishList | null>;
    deleteWishlist(wishlistId: string): Promise<WishList | null>;
    updateWishlistItem(userId: string, item: WishlistItem): Promise<WishList | null>;
    deleteWishlistItem(userId: string, productId: string): Promise<WishList | null>;
    deleteAllWishlistItems(userId: string): Promise<WishList | null>;
}
