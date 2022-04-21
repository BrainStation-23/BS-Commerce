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
    return await this.db.findWishListByUserId(userId);
  }

  async isExistItem(userId: string, productId: string): Promise<WishList | null> {
    return await this.db.findItemByUserIdAndProductId(userId, productId);
  }

  async incrementItem(userId: string, item: Item): Promise<WishList | null> {
    return await this.db.findWishListAndIncrementItem(userId, item);
  }

  async addItem(userId: string, item: Item): Promise<WishList | null> {
    return await this.db.findWishListAndAddItem(userId, item);
  }

  async createWishlist(userId: string, items: Item[],): Promise<WishList | null> {
    return await this.db.NewWishListCreate(userId, items);
  }

  async getWishlist(userId: string): Promise<WishList | null> {
    return await this.db.getWishListByUserId(userId);
  }

  async getWishlistById(wishlistId: string): Promise<WishList | null> {
    return await this.db.getWishListByWishlistId(wishlistId);
  }

  async deleteWishlistById(wishlistId: string): Promise<WishList | null> {
    return await this.db.deleteWishListByWishlistId(wishlistId);
  }

  async updateWishlistItem(userId: string, item: Item,): Promise<WishList | null> {
    return await this.db.updateWishlistItem(userId, item);
  }

  async deleteWishlistItem(userId: string, item: Item,): Promise<WishList | null> {
    return await this.db.deleteWishlistItem(userId, item);
  }

  async deleteWishlistItemByProductId(userId: string, product: string,): Promise<WishList | null> {
    return await this.db.deleteWishlistItemByProductId(userId, product);
  }

  async getWishlistWithoutPopulate(userId: string): Promise<WishList | null> {
    return await this.db.getWishListWithoutPopulateByUserId(userId);
  }

  async deleteAllWishlistItems(userId: string): Promise<WishList | null> {
    return await this.db.deleteAllWishlistItemsByUserId(userId);
  }
}
