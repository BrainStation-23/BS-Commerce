import { Cart, Item, UpdateItem } from '../../../entity/cart';
import { ICartDatabase } from '../../../modules/cart/repositories/cart.database.interface';
export declare class CartDatabase implements ICartDatabase {
    addItem(userId: string, item: Item): Promise<Cart | null>;
    isCartExist(userId: string): Promise<Cart | null>;
    getCartProduct(cart: Cart): Promise<any | null>;
    isItemExist(userId: string, productId: string): Promise<Cart | null>;
    incrementItemQuantity(userId: string, item: Item): Promise<Cart | null>;
    createCart(cart: Cart): Promise<Cart | null>;
    getCart(userId: string): Promise<Cart | null>;
    deleteCart(cartId: string): Promise<Cart | null>;
    updateCartItem(userId: string, item: UpdateItem): Promise<Cart | null>;
    deleteCartItem(userId: string, productId: string): Promise<Cart | null>;
    deleteAllCartItems(userId: string): Promise<Cart | null>;
}
