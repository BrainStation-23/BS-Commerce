import { Cart, Item } from '../../../entity/cart';
import { ICartDatabase } from './cart.database.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CartRepository {
  constructor(private readonly db: ICartDatabase) {}

  async isExistCart(userId: string): Promise<Cart | null> {
    return await this.db.findCartByUserId(userId);
  }

  async isExistItem(userId: string, productId: string): Promise<Cart | null> {
    return await this.db.findItemByUserIdAndProductId(userId, productId);
  }

  async addItem(userId: string, item: Item): Promise<Cart | null> {
    return await this.db.addItemByUserId(userId, item);
  }

  async incrementItem(userId: string, item: Item): Promise<Cart | null> {
    return await this.db.incrementItem(userId, item);
  }

  async createCart(userId: string, items: Item[]): Promise<Cart | null> {
    return await this.db.createCart(userId, items);
  }

  async getCart(userId: string): Promise<Cart | null> {
    return await this.db.getCart(userId);
  }

  async deleteCartById(cartId: string): Promise<Cart | null> {
    return await this.db.deleteCartById(cartId);
  }

  async updateCartItem(userId: string, item: Item): Promise<Cart | null> {
    return await this.db.updateCartItem(userId, item);
  }

  async deleteCartItem(userId: string, item: Item): Promise<Cart | null> {
    return await this.db.deleteCartItem(userId, item);
  }

  async deleteCartItemByProductId(
    userId: string,
    productId: string,
  ): Promise<Cart | null> {
    return await this.db.deleteCartItemByProductId(userId, productId);
  }

  async getItemsWithoutPopulate(userId: string): Promise<Cart | null> {
    return await this.db.getItemsWithoutPopulate(userId);
  }

  async deleteAllCartItems(userId: string): Promise<Cart | null> {
    return await this.db.deleteAllCartItems(userId);
  }
}
