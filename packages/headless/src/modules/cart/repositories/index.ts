import { ICartDatabase } from './cart.database.interface';
import { Injectable } from '@nestjs/common';
import { Cart, Item, UpdateItem } from '../../../entity/cart';
import { randomUUID } from 'crypto';

@Injectable()
export class CartRepository {
  constructor(private readonly db: ICartDatabase) {}

  async isCartExist(userId: string): Promise<Cart | null> {
    return await this.db.isCartExist(userId);
  }

  async isItemExist(userId: string, productId: string): Promise<Cart | null> {
    return await this.db.isItemExist(userId, productId);
  }

  async addItem(userId: string, item: Item): Promise<Cart | null> {
    return await this.db.addItem(userId, item);
  }

  async getCartProduct(cart: Cart): Promise<Cart | null> {
    return await this.db.getCartProduct(cart);
  }

  async incrementItemQuantity(
    userId: string,
    item: Item,
  ): Promise<Cart | null> {
    return await this.db.incrementItemQuantity(userId, item);
  }

  async createCart(cart: Cart): Promise<Cart | null> {
    cart.id = randomUUID();
    return await this.db.createCart(cart);
  }

  async getCart(userId: string): Promise<Cart | null> {
    return await this.db.getCart(userId);
  }

  async deleteCart(cartId: string): Promise<Cart | null> {
    return await this.db.deleteCart(cartId);
  }

  async updateCartItem(userId: string, item: UpdateItem): Promise<Cart | null> {
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
