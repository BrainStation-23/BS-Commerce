import { ICartDatabase } from './cart.database.interface';
import { Injectable } from '@nestjs/common';
import { Cart, Item } from 'src/entity/cart';

@Injectable()
export class CartRepository {
  constructor(private readonly db: ICartDatabase) {}

  async isCartExist(userId: string): Promise<Cart | null> {
    return await this.db.findCart(userId);
  }

  async isItemExist(userId: string, productId: string): Promise<Cart | null> {
    return await this.db.findItem(userId, productId);
  }

  async addItem(userId: string, item: Item): Promise<Cart | null> {
    return await this.db.addItem(userId, item);
  }

  async incrementItemQuantity(
    userId: string,
    item: Item,
  ): Promise<Cart | null> {
    return await this.db.incrementItemQuantity(userId, item);
  }

  async createCart(userId: string, items: Item[]): Promise<Cart | null> {
    return await this.db.createCart(userId, items);
  }

  async getCart(userId: string): Promise<Cart | null> {
    return await this.db.getCart(userId);
  }

  async deleteCart(cartId: string): Promise<Cart | null> {
    return await this.db.deleteCart(cartId);
  }

  async updateCartItem(userId: string, item: Item): Promise<Cart | null> {
    return await this.db.updateCartItem(userId, item);
  }

  async deleteCartItem(
    userId: string,
    productId: string,
  ): Promise<Cart | null> {
    return await this.db.deleteCartItem(userId, productId);
  }

  async deleteAllCartItems(userId: string): Promise<Cart | null> {
    return await this.db.deleteAllCartItems(userId);
  }
}
