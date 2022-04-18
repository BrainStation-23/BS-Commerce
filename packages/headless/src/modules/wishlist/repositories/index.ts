import { Injectable } from '@nestjs/common';
import { IWishListDatabase } from './wishList.database.interface';
import { Item, WishList } from 'src/entity/wishList';
/**
 * @generator
 */
@Injectable()
export class WishListRepository {
  constructor(private readonly db: IWishListDatabase) { }

  async isExistWishlist(userId: string): Promise<WishList | null> {
    const wishList = await this.db.findWishListByUserId(userId);
    return wishList;
  }

  async isExistItem(userId: string, productId: string): Promise<WishList | null> {
    const wishList = await this.db.findItemByUserIdAndProductId(userId, productId,   );
    return wishList;
  }

  async incrementItem(userId: string, item: Item): Promise<WishList | null> {
    const wishList = await this.db.findWishListAndIncrementItem(userId, item);
    return wishList;
  }

  async addItem(userId: string, item: Item): Promise<WishList | null> {
    const wishList = await this.db.findWishListAndAddItem(userId, item);
    return wishList;
  }

  async createWishlist(userId: string, items: Item[],): Promise<WishList | null> {
    const wishList = await this.db.NewWishListCreate(userId, items);
    return wishList;
  }

  async getWishlist(userId: string): Promise<WishList | null> {
    const wishList = await this.db.getWishListByUserId(userId);
    return wishList;
  }

  async getWishlistById(wishlistId: string): Promise<WishList | null> {
    const wishList = await this.db.getWishListByWishlistId(wishlistId);
    return wishList;
  }

  async deleteWishlistById(wishlistId: string): Promise<WishList | null> {
    const wishList = await this.db.deleteWishListByWishlistId(wishlistId);
    return wishList;
  }

  async updateWishlistItem(userId: string, item: Item,): Promise<WishList | null> {
    const wishList = await this.db.updateWishlistItem(userId, item);
    return wishList;
  }

  async deleteWishlistItem(userId: string, item: Item,): Promise<WishList | null> {
    const wishList = await this.db.deleteWishlistItem(userId, item);
    return wishList;
  }
  async deleteWishlistItemByProductId(userId: string, product: string,): Promise<WishList | null> {
    const wishList = await this.db.deleteWishlistItemByProductId(userId, product);
    return wishList;
  }

  async getWishlistWithoutPopulate(userId: string): Promise<WishList | null> {
    const wishList = await this.db.getWishListWithoutPopulateByUserId(userId);
    return wishList;
  }

  async deleteAllWishlistItems(userId: string): Promise<WishList | null> {
    const wishList = await this.db.deleteAllWishlistItemsByUserId(userId);
    return wishList;
  }
}
