import { CartModel } from './cart.model';
import { Injectable } from '@nestjs/common';
import { Cart, Item } from 'src/entity/cart';
import { ICartDatabase } from 'src/modules/cart/repositories/cart.database.interface';
import { ProductModel } from '../product/product.model';
import { Product } from 'src/entity/product';
@Injectable()
export class CartDatabase implements ICartDatabase {
  //   constructor() {}

  async addItem(userId: string, item: Item): Promise<Cart | null> {
    return await CartModel.findOneAndUpdate(
      { userId },
      { $push: { items: item } },
    )
      .lean()
      .exec();
  }

  async findCart(userId: string): Promise<Cart | null> {
    return await CartModel.findOne({ userId }).lean().exec();
  }

  async getCartProduct(cart: Cart): Promise<Cart | null> {
    const products = await ProductModel.find({
      id: { $in: cart.items.map((item) => item.productId) },
    }).select('info photos id -_id');
    let map = new Map<string, Product>();
    for (let i = 0, len = products.length; i < len; i++) {
      map.set(products[i].id, products[i]);
    }
    return {
      ...cart,
      items: cart.items.map((item) => {
        return { ...item, product: map.get(item.productId) };
      }),
    };
  }

  async findItem(userId: string, productId: string): Promise<Cart | null> {
    return await CartModel.findOne({
      userId,
      'items.productId': productId,
    }).lean();
  }

  async incrementItemQuantity(
    userId: string,
    item: Item,
  ): Promise<Cart | null> {
    return await CartModel.findOneAndUpdate(
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

  async createCart(userId: string, items: Item[]): Promise<Cart | null> {
    return await new CartModel({ userId, items: items }).save();
  }

  async getCart(userId: string): Promise<Cart | null> {
    return await CartModel.findOne({ userId: userId }).lean();
  }

  async deleteCart(cartId: string): Promise<Cart | null> {
    return CartModel.findOneAndRemove({ id: cartId }).lean();
  }

  async updateCartItem(userId: string, item: Item): Promise<Cart | null> {
    return await CartModel.findOneAndUpdate(
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

  async deleteCartItem(
    userId: string,
    productId: string,
  ): Promise<Cart | null> {
    return await CartModel.findOneAndUpdate(
      { userId: userId, 'items.productId': productId },
      { $pull: { items: { productId: productId } } },
      { new: true },
    )
      .lean()
      .exec();
  }
  async deleteAllCartItems(userId: string): Promise<Cart | null> {
    return CartModel.findOneAndUpdate(
      { userId },
      { $set: { items: [] } },
      { new: true },
    )
      .lean()
      .exec();
  }
}