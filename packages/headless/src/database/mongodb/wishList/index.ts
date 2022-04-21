import { Injectable } from '@nestjs/common';
import { Item, WishList } from 'src/entity/wishList';
import { IWishListDatabase } from 'src/modules/wishlist/repositories/wishList.database.interface';
import { WishListModel } from './wishList.model';
@Injectable()
export class WishListDatabase implements IWishListDatabase {

  async getUserWishList(userId: string): Promise<WishList | null> {
    return await WishListModel.findOne({ user: userId }).lean().exec();;
  }

  async getItem(userId: string, productId: string,): Promise<WishList | null> {
    return await WishListModel.findOne({
      user: userId,
      'items.product': productId,
    })
      .lean()
      .exec();
  }

  async incrementWishListItem(userId: string, item: Item,): Promise<WishList | null> {
    return await WishListModel.findOneAndUpdate(
      {
        user: userId,
        'items.product': item.product,
      },
      { $inc: { 'items.$.quantity': item.quantity } },
      { new: true },
    )
      .lean()
      .exec();
  }

  async addWishListItem(userId: string, item: Item,): Promise<WishList | null> {
    return await WishListModel.findOneAndUpdate(
      { user: userId },
      { $push: { items: item } },
      { new: true },
    )
      .lean()
      .exec();
  }

  async createWishList(userId: string, items: Item[]): Promise<WishList | null> {
    const wishlist = new WishListModel({ user: userId, items: items });
    return await wishlist.save();
  }

  async getWishList(wishlistId: string,): Promise<WishList | null> {
    return await WishListModel.findOne({ _id: wishlistId }).lean().exec();
  }

  async deleteWishList(
    wishlistId: string,
  ): Promise<WishList | null> {
    return await WishListModel.findByIdAndRemove(wishlistId).lean().exec();;
  }

  async updateWishlistItem(userId: string, item: Item,): Promise<WishList | null> {
    return await WishListModel.findOneAndUpdate(
      {
        user: userId,
        'items.product': item.product,
      },
      { $set: { 'items.$.quantity': item.quantity } },
      { new: true },
    )
      .lean()
      .exec();
  }

  async deleteWishlistItem(userId: string, productId: string): Promise<WishList | null> {
    return WishListModel.findOneAndUpdate(
      { user: userId },
      { $pull: { items: { product: productId } } },
      { new: true },
    )
      .lean()
      .exec();
  }

  async deleteAllWishlistItems(userId: string,): Promise<WishList | null> {
    return WishListModel.findOneAndUpdate(
      { user: userId },
      { $set: { items: [] } },
      { new: true },
    )
      .lean()
      .exec();
  }
}
