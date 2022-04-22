import { Injectable } from '@nestjs/common';
import { Item, WishList } from 'src/entity/wishList';
import { IWishListDatabase } from 'src/modules/wishlist/repositories/wishList.database.interface';
import { WishListModel } from './wishList.model';
@Injectable()
export class WishListDatabase implements IWishListDatabase {

  async getUserWishList(userId: string): Promise<WishList | null> {
    return await WishListModel.findOne({ userId }).lean();
  }

  async getItem(userId: string, productId: string,): Promise<WishList | null> {
    return await WishListModel.findOne({
      userId,
      'items.productId': productId,
    }).lean()
  }

  async incrementItemQuantity(userId: string, item: Item,): Promise<WishList | null> {
    return await WishListModel.findOneAndUpdate(
      {
        userId,
        'items.productId': item.productId,
      },
      { $inc: { 'items.$.quantity': item.quantity } },
      { new: true },
    )
      .lean()
      .exec();
  }

  async addWishListItem(userId: string, item: Item,): Promise<WishList | null> {
    return await WishListModel.findOneAndUpdate(
      { userId },
      { $push: { items: item } },
      { new: true },
    )
      .lean()
      .exec();
  }

  async createWishList(userId: string, items: Item[]): Promise<WishList | null> {
    const wishlist = new WishListModel({ userId, items });
    return await wishlist.save();
  }

  async getWishList(wishlistId: string,): Promise<WishList | null> {
    return await WishListModel.findOne({ id: wishlistId }).lean();
  }

  async deleteWishList(
    wishlistId: string,
  ): Promise<WishList | null> {
    return await WishListModel.findOneAndRemove({ id: wishlistId }).lean();
  }

  async updateWishlistItem(userId: string, item: Item,): Promise<WishList | null> {
    return await WishListModel.findOneAndUpdate(
      {
        userId,
        'items.productId': item.productId,
      },
      { $set: { 'items.$.quantity': item.quantity } },
      { new: true },
    )
      .lean()
      .exec();
  }

  async deleteWishlistItem(userId: string, productId: string): Promise<WishList | null> {
    return WishListModel.findOneAndUpdate(
      { userId },
      { $pull: { items: { productId } } },
      { new: true },
    )
      .lean()
      .exec();
  }

  async deleteAllWishlistItems(userId: string,): Promise<WishList | null> {
    return WishListModel.findOneAndUpdate(
      { userId },
      { $set: { items: [] } },
      { new: true }
    )
      .lean()
      .exec();
  }
}
