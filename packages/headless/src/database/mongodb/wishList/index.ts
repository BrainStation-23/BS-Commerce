import { Injectable } from '@nestjs/common';
import { Item, WishList } from 'src/entity/wishList';
import { IWishListDatabase } from 'src/modules/wishlist/repositories/wishList.database.interface';
import { WishListModel } from './wishList.model';
@Injectable()
export class WishListDatabase implements IWishListDatabase {
  async findWishListByUserId(userId: string): Promise<WishList | null> {
    const wishList = await WishListModel.findOne({ user: userId }).lean();
    return Promise.resolve(wishList);
  }

  async findItemByUserIdAndProductId(userId: string, productId: string,): Promise<WishList | null> {
    const wishList = await WishListModel.findOne({
      user: userId,
      'items.product': productId,
    }).lean();
    return Promise.resolve(wishList);
  }

  async findWishListAndIncrementItem(userId: string, item: Item,): Promise<WishList | null> {
    const wishList = await WishListModel.findOneAndUpdate(
      {
        user: userId,
        'items.product': item.product,
      },
      { $inc: { 'items.$.quantity': item.quantity } },
      { new: true },
    );
    return Promise.resolve(wishList);
  }

  async findWishListAndAddItem(userId: string, item: Item,): Promise<WishList | null> {
    const wishList = await WishListModel.findOneAndUpdate(
      { user: userId },
      { $push: { items: item } },
      { new: true },
    );
    return Promise.resolve(wishList);
  }

  async NewWishListCreate(userId: string, items: Item[]): Promise<WishList | null> {
    const newWishlist = new WishListModel({ user: userId, items: items });
    await newWishlist.save();
    return Promise.resolve(newWishlist);
  }

  async getWishListByUserId(userId: string): Promise<WishList | null> {
    const wishList = await WishListModel.findOne({ user: userId })
      .populate('items.product', 'info photos')
      .lean()
      .exec();
    return Promise.resolve(wishList);
  }

  async getWishListByWishlistId(wishlistId: string,): Promise<WishList | null> {
    const wishList = await WishListModel.findOne({ _id: wishlistId })
      .populate('items.product', 'info photos')
      .lean()
      .exec();
    return Promise.resolve(wishList);
  }

  async deleteWishListByWishlistId(
    wishlistId: string,
  ): Promise<WishList | null> {
    const wishList = await WishListModel.findByIdAndRemove(wishlistId);
    return Promise.resolve(wishList);
  }

  async updateWishlistItem(userId: string, item: Item,): Promise<WishList | null> {
    const wishList = await WishListModel.findOneAndUpdate(
      {
        user: userId,
        'items.product': item.product,
      },
      { $set: { 'items.$.quantity': item.quantity } },
      { new: true },
    )
      .populate('items.product', 'info photos')
      .exec();
    return Promise.resolve(wishList);
  }

  async deleteWishlistItem(userId: string, item: Item,): Promise<WishList | null> {
    const wishList = WishListModel.findOneAndUpdate(
      { user: userId },
      { $pull: { items: { product: item.product } } },
      { new: true },
    )
      .populate('items.product', 'info photos')
      .exec();
    return Promise.resolve(wishList);
  }

  async getWishListWithoutPopulateByUserId(userId: string,): Promise<WishList | null> {
    const wishList = await WishListModel.findOne({ user: userId })
      .lean()
      .exec();
    return Promise.resolve(wishList);
  }

  async deleteAllWishlistItemsByUserId(userId: string,): Promise<WishList | null> {
    const wishList = WishListModel.findOneAndUpdate(
      { user: userId },
      { $set: { items: [] } },
      { new: true },
    ).exec();
    return Promise.resolve(wishList);
  }
  async deleteWishlistItemByProductId(userId: string, productId: string): Promise<WishList | null> {
    const wishList = WishListModel.findOneAndUpdate(
      { user: userId },
      { $pull: { items: { product: productId } } },
      { new: true },
    )
      .populate('items.product', 'info photos')
      .exec();
    return Promise.resolve(wishList);
  }
}
