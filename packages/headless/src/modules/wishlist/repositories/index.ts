import { Injectable } from '@nestjs/common';
import { IWishListDatabase } from './wishList.database.interface';
import { Item, WishList } from 'src/entity/wishList';

@Injectable()
export class WishListRepository {
  constructor(private readonly db: IWishListDatabase) { }

  async isExistItem(userId: string, productId: string): Promise<WishList | null> {
    return await this.db.getItem(userId, productId);
  }

  async incrementItemQuantity(userId: string, item: Item): Promise<WishList | null> {
    return await this.db.incrementItemQuantity(userId, item);
  }

  async addItem(userId: string, item: Item): Promise<WishList | null> {
    return await this.db.addWishListItem(userId, item);
  }

  async createWishlist(userId: string, items: Item[],): Promise<WishList | null> {
    return await this.db.createWishList(userId, items);
  }

  async getUserWishlist(userId: string): Promise<WishList | null> {
    return await this.db.getUserWishList(userId);
  }

  async getWishlist(wishlistId: string): Promise<WishList | null> {
    return await this.db.getWishList(wishlistId);
  }

  async deleteWishlist(wishlistId: string): Promise<WishList | null> {
    return await this.db.deleteWishList(wishlistId);
  }

  async updateWishlistItem(userId: string, item: Item,): Promise<WishList | null> {
    return await this.db.updateWishlistItem(userId, item);
  }

  async deleteWishlistItem(userId: string, productId: string,): Promise<WishList | null> {
    return await this.db.deleteWishlistItem(userId, productId);
  }

  async deleteAllWishlistItems(userId: string): Promise<WishList | null> {
    return await this.db.deleteAllWishlistItems(userId);
  }
}
