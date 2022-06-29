import { Injectable } from '@nestjs/common';
import { IWishListDatabase } from './wishList.database.interface';
import { Item, WishList } from 'src/entity/wishList';
import { randomUUID } from 'crypto';

@Injectable()
export class WishListRepository {
  constructor(private readonly db: IWishListDatabase) { }

  async doesItemExist(userId: string, productId: string): Promise<WishList | null> {
    return await this.db.getWishList({
      userId,
      'items.productId': productId,
    });
  }

  async incrementItemQuantity(userId: string, item: Item): Promise<WishList | null> {
    return await this.db.incrementItemQuantity(userId, item);
  }

  async addItem(userId: string, item: Item): Promise<WishList | null> {
    return await this.db.addWishListItem(userId, item);
  }

  async createWishlist(wishList: WishList): Promise<WishList | null> {
    return await this.db.createWishList(wishList);
  }

  async getUserWishlist(userId: string): Promise<WishList | null> {
    return await this.db.getWishList({ userId });
  }

  async getWishlistProduct(wishlist: WishList): Promise<WishList | null> {
    return await this.db.getWishlistProduct(wishlist);
  }

  async getWishlist(wishlistId: string): Promise<WishList | null> {
    return await this.db.getWishList({ id: wishlistId });
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
