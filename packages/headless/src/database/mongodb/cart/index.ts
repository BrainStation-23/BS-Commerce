import { Cart, Item } from '../../../entity/cart';
import { ICartDatabase } from '../../../modules/cart/repositories/cart.database.interface';
import { CartModel } from './cart.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CartDatabase implements ICartDatabase {
  //   constructor() {}

  async addItemByUserId(userId: string, item: Item): Promise<Cart | null> {
    const cart = await CartModel.findOneAndUpdate(
      { user: userId },
      { $push: { items: item } },
    ).lean();
    return Promise.resolve(cart);
  }

  async findCartByUserId(userId: string): Promise<Cart | null> {
    const cart = await CartModel.findOne({ user: userId })
      .lean()
      .populate('items.product', 'info photos')
      .lean()
      .exec();
    return Promise.resolve(cart);
  }

  async findItemByUserIdAndProductId(
    userId: string,
    productId: string,
  ): Promise<Cart | null> {
    const cart = await CartModel.findOne({
      user: userId,
      'items.product': productId,
    }).lean();
    return Promise.resolve(cart);
  }

  async incrementItem(userId: string, item: Item): Promise<Cart | null> {
    const cart = await CartModel.findOneAndUpdate(
      {
        user: userId,
        'items.product': item.product,
      },
      { $inc: { 'items.$.quantity': item.quantity } },
    ).lean();
    return Promise.resolve(cart);
  }

  async createCart(userId: string, items: Item[]): Promise<Cart | null> {
    const newCart = new CartModel({ user: userId, items: items });
    await newCart.save();
    return Promise.resolve(newCart);
  }

  async getCart(userId: string): Promise<Cart | null> {
    const cart = await CartModel.findOne({ user: userId }).lean();
    return Promise.resolve(cart);
  }

  async deleteCartById(cartId: string): Promise<Cart | null> {
    const cart = CartModel.findByIdAndRemove({ _id: cartId }).lean();
    return Promise.resolve(cart);
  }

  async updateCartItem(userId: string, item: Item): Promise<Cart | null> {
    const updatedCart = await CartModel.findOneAndUpdate(
      {
        user: userId,
        'items.product': item.product,
      },
      { $set: { 'items.$.quantity': item.quantity } },
      { new: true },
    )
      .populate('items.product', 'info photos')
      .lean()
      .exec();
    return Promise.resolve(updatedCart);
  }

  async deleteCartItem(userId: string, item: Item): Promise<Cart | null> {
    const cart = await CartModel.findOneAndUpdate(
      { user: userId },
      { $pull: { items: { product: item.product } } },
      { new: true },
    )
      .populate('items.product', 'info photos')
      .lean()
      .exec();
    return Promise.resolve(cart);
  }

  async deleteCartItemByProductId(
    userId: string,
    productId: string,
  ): Promise<Cart | null> {
    const cart = await CartModel.findOneAndUpdate(
      { user: userId },
      { $pull: { items: { product: productId } } },
      { new: true },
    )
      .lean()
      .exec();
    return Promise.resolve(cart);
  }

  async getItemsWithoutPopulate(userId: string): Promise<Cart | null> {
    const cart = CartModel.findOne({ user: userId }).lean().exec();
    return Promise.resolve(cart);
  }

  async deleteAllCartItems(userId: string): Promise<Cart | null> {
    const cart = CartModel.findOneAndUpdate(
      { user: userId },
      { $set: { items: [] } },
      { new: true },
    )
      .lean()
      .exec();
    return Promise.resolve(cart);
  }
}
