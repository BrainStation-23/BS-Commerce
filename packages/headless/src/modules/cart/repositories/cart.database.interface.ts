import { Injectable } from '@nestjs/common';
import { Cart, Item } from '../../../entity/cart';

@Injectable()
export abstract class ICartDatabase {
  abstract findCartByUserId: (userId: string) => Promise<Cart | null>;
  abstract findItemByUserIdAndProductId: (
    userId: string,
    productId: string,
  ) => Promise<Cart | null>;

  abstract addItemByUserId: (
    userId: string,
    item: Item,
  ) => Promise<Cart | null>;

  abstract incrementItem: (userId: string, item: Item) => Promise<Cart | null>;

  abstract createCart: (
    id: string,
    userId: string,
    items: Item[],
  ) => Promise<Cart | null>;

  abstract getCart: (userId: string) => Promise<Cart | null>;
  abstract deleteCartById: (cartId: string) => Promise<Cart | null>;
  abstract updateCartItem: (userId: string, item: Item) => Promise<Cart | null>;

  abstract deleteCartItem: (userId: string, item: Item) => Promise<Cart | null>;

  abstract deleteCartItemByProductId: (
    userId: string,
    productId: string,
  ) => Promise<Cart | null>;

  abstract getItemsWithoutPopulate: (userId: string) => Promise<Cart | null>;
  abstract deleteAllCartItems: (userId: string) => Promise<Cart | null>;
  // abstract findAll: (skip?: number, limit?: number) => Promise<Cart[]>;
  // abstract save: (cart: Cart) => Promise<Cart | null>;
}
