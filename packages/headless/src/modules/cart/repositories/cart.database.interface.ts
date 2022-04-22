import { Injectable } from '@nestjs/common';
import { Cart, Item } from 'src/entity/cart';

@Injectable()
export abstract class ICartDatabase {
  abstract findCart: (userId: string) => Promise<Cart | null>;
  abstract findItem: (
    userId: string,
    productId: string,
  ) => Promise<Cart | null>;

  abstract addItem: (userId: string, item: Item) => Promise<Cart | null>;
  abstract incrementItemQuantity: (
    userId: string,
    item: Item,
  ) => Promise<Cart | null>;
  abstract createCart: (userId: string, items: Item[]) => Promise<Cart | null>;
  abstract getCart: (userId: string) => Promise<Cart | null>;
  abstract deleteCart: (cartId: string) => Promise<Cart | null>;
  abstract updateCartItem: (userId: string, item: Item) => Promise<Cart | null>;
  abstract deleteCartItem: (
    userId: string,
    productId: string,
  ) => Promise<Cart | null>;
  abstract deleteAllCartItems: (userId: string) => Promise<Cart | null>;
}
