import { Injectable } from '@nestjs/common';
import { Item, WishList } from 'src/entity/wishList';

@Injectable()
export abstract class IWishListDatabase {
  abstract getUserWishList: (userId: string) => Promise<WishList | null>;
  abstract getWishlistProduct: (wishlist: WishList) => Promise<WishList | null>;
  abstract doesItemExist: (userId: string, productId: string) => Promise<WishList | null>;
  abstract incrementItemQuantity: (userId: string, item: Item,) => Promise<WishList | null>;
  abstract addWishListItem: (userId: string, item: Item,) => Promise<WishList | null>;
  abstract createWishList: (wishList: WishList) => Promise<WishList | null>;
  abstract getWishList: (wishlistId: string,) => Promise<WishList | null>;
  abstract deleteWishList: (wishlistId: string,) => Promise<WishList | null>;
  abstract updateWishlistItem: (userId: string, item: Item,) => Promise<WishList | null>;
  abstract deleteWishlistItem: (userId: string, productId: string) => Promise<WishList | null>;
  abstract deleteAllWishlistItems: (userId: string,) => Promise<WishList | null>;
}
