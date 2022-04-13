import { Cart, Item } from '../../../entity/cart';
import { ICartDatabase } from './cart.database.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CartRepository {
  constructor(private readonly db: ICartDatabase) {}

  async isExistCart(userId: string): Promise<Cart | null> {
    const cart = await this.db.findCartByUserId(userId);
    if (!cart) return null;
    return cart;
  }

  async isExistItem(userId: string, productId: string): Promise<Cart | null> {
    const cart = await this.db.findItemByUserIdAndProductId(userId, productId);
    if (!cart) return null;
    return cart;
  }

  async addItem(userId: string, item: Item): Promise<Cart | null> {
    const addItem = await this.db.addItemByUserId(userId, item);
    if (!addItem) return null;
    return addItem;
  }

  async incrementItem(userId: string, item: Item): Promise<Cart | null> {
    const cart = await this.db.incrementItem(userId, item);
    if (!cart) return null;
    return cart;
  }

  async createCart(userId: string, items: Item[]): Promise<Cart | null> {
    const newCart = await this.db.createCart(userId, items);
    if (!newCart) return null;
    return newCart;
  }

  async getCart(userId: string): Promise<Cart | null> {
    const cart = await this.db.getCart(userId);
    if (!cart) return null;
    return cart;
  }

  async deleteCartById(cartId: string): Promise<Cart | null> {
    const deletedCart = await this.db.deleteCartById(cartId);
    if (!deletedCart) return null;
    return deletedCart;
  }

  async updateCartItem(userId: string, item: Item): Promise<Cart | null> {
    const updatedCart = await this.db.updateCartItem(userId, item);
    if (!updatedCart) return null;
    return updatedCart;
  }

  async deleteCartItem(userId: string, item: Item): Promise<Cart | null> {
    const deletedCart = await this.db.deleteCartItem(userId, item);
    if (!deletedCart) return null;
    return deletedCart;
  }

  async deleteCartItemByProductId(
    userId: string,
    productId: string,
  ): Promise<Cart | null> {
    const deletedCart = await this.db.deleteCartItemByProductId(
      userId,
      productId,
    );
    if (!deletedCart) return null;
    return deletedCart;
  }

  async getItemsWithoutPopulate(userId: string): Promise<Cart | null> {
    const cart = await this.db.getItemsWithoutPopulate(userId);
    if (!cart) return null;
    return cart;
  }

  async deleteAllCartItems(userId: string): Promise<Cart | null> {
    const cart = await this.db.deleteAllCartItems(userId);
    if (!cart) return null;
    return cart;
  }
}
