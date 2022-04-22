import { CartModel } from './cart.model';
import { Injectable } from '@nestjs/common';
import { Cart, Item } from 'src/entity/cart';
import { ICartDatabase } from 'src/modules/cart/repositories/cart.database.interface';
@Injectable()
export class CartDatabase implements ICartDatabase {
  //   constructor() {}

  async addItem(userId: string, item: Item): Promise<Cart | null> {
    const cart = await CartModel.findOneAndUpdate(
      { userId },
      { $push: { items: item } },
    )
      .lean()
      .exec();
    return Promise.resolve(cart);
  }

  async findCart(userId: string): Promise<Cart | null> {
    const cart = await CartModel.findOne({ userId }).lean().exec();
    return Promise.resolve(cart);
  }

  async findItem(userId: string, productId: string): Promise<Cart | null> {
    const cart = await CartModel.findOne({
      userId,
      'items.productId': productId,
    }).lean();
    return Promise.resolve(cart);
  }

  async incrementItemQuantity(
    userId: string,
    item: Item,
  ): Promise<Cart | null> {
    const cart = await CartModel.findOneAndUpdate(
      {
        userId,
        'items.productId': item.productId,
      },
      { $inc: { 'items.$.quantity': item.quantity } },
    ).lean();
    return Promise.resolve(cart);
  }

  async createCart(userId: string, items: Item[]): Promise<Cart | null> {
    const newCart = new CartModel({ userId, items: items });
    await newCart.save();
    return Promise.resolve(newCart);
  }

  async getCart(userId: string): Promise<Cart | null> {
    const cart = await CartModel.findOne({ userId }).lean();
    return Promise.resolve(cart);
  }

  async deleteCart(cartId: string): Promise<Cart | null> {
    const cart = CartModel.findOneAndRemove({ id: cartId }).lean();
    return Promise.resolve(cart);
  }

  async updateCartItem(userId: string, item: Item): Promise<Cart | null> {
    const updatedCart = await CartModel.findOneAndUpdate(
      {
        userId,
        'items.productId': item.productId,
      },
      { $set: { 'items.$.quantity': item.quantity } },
      { new: true },
    )
      .lean()
      .exec();
    return Promise.resolve(updatedCart);
  }

  async deleteCartItem(
    userId: string,
    productId: string,
  ): Promise<Cart | null> {
    const cart = await CartModel.findOneAndUpdate(
      { userId: userId },
      { $pull: { items: { productId: productId } } },
      { new: true },
    )
      .lean()
      .exec();
    console.log(cart);
    return Promise.resolve(cart);
  }
  async deleteAllCartItems(userId: string): Promise<Cart | null> {
    const cart = CartModel.findOneAndUpdate(
      { userId },
      { $set: { items: [] } },
      { new: true },
    )
      .lean()
      .exec();
    return Promise.resolve(cart);
  }
}
