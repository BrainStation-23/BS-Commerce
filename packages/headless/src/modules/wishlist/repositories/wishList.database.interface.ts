import { Injectable } from '@nestjs/common';
import { Item, WishList } from 'src/entity/wishList';

@Injectable()
export abstract class IWishListDatabase {
  abstract findWishListByUserId: (userId: string) => Promise<WishList | null>;
  abstract findItemByUserIdAndProductId: (userId: string, productId: string) => Promise<WishList | null>;
  abstract findWishListAndIncrementItem: (userId: string, item: Item,) => Promise<WishList | null>;
  abstract findWishListAndAddItem: (userId: string, item: Item,) => Promise<WishList | null>;
  abstract NewWishListCreate: (userId: string, items: Item[],) => Promise<WishList | null>;
  abstract getWishListByUserId: (userId: string) => Promise<WishList | null>;
  abstract getWishListByWishlistId: (wishlistId: string,) => Promise<WishList | null>;
  abstract deleteWishListByWishlistId: (wishlistId: string,) => Promise<WishList | null>;
  abstract updateWishlistItem: (userId: string, item: Item,) => Promise<WishList | null>;
  abstract deleteWishlistItem: (userId: string, item: Item,) => Promise<WishList | null>;
  abstract deleteWishlistItemByProductId: (userId: string,productId: string) => Promise<WishList | null>;
  abstract getWishListWithoutPopulateByUserId: (userId: string,) => Promise<WishList | null>;
  abstract deleteAllWishlistItemsByUserId: (userId: string,) => Promise<WishList | null>;
}
