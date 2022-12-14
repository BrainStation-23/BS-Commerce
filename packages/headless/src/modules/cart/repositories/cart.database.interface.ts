import { Injectable } from '@nestjs/common';
import { Cart, Item, UpdateItem } from '../../../entity/cart';

@Injectable()
export abstract class ICartDatabase {
  abstract isCartExist: (userId: string) => Promise<Cart | null>;
  abstract isItemExist: (
    userId: string,
    productId: string,
  ) => Promise<Cart | null>;

  abstract addItem: (userId: string, item: Item) => Promise<Cart | null>;
  abstract getCartProduct: (cart: Cart) => Promise<Cart | null>;
  abstract incrementItemQuantity: (
    userId: string,
    item: Item,
  ) => Promise<Cart | null>;
  abstract createCart: (cart: Cart) => Promise<Cart | null>;
  abstract getCart: (userId: string) => Promise<Cart | null>;
  abstract deleteCart: (cartId: string) => Promise<Cart | null>;
  abstract updateCartItem: (
    userId: string,
    item: UpdateItem,
  ) => Promise<Cart | null>;
  abstract deleteCartItem: (
    userId: string,
    productId: string,
  ) => Promise<Cart | null>;
  abstract deleteAllCartItems: (userId: string) => Promise<Cart | null>;
}
