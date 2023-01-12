import { ICartDatabase } from './cart.database.interface';
import { Cart, Item, UpdateItem } from '../../../entity/cart';
export declare class CartRepository {
    private readonly db;
    constructor(db: ICartDatabase);
    isCartExist(userId: string): Promise<Cart | null>;
    isItemExist(userId: string, productId: string): Promise<Cart | null>;
    addItem(userId: string, item: Item): Promise<Cart | null>;
    getCartProduct(cart: Cart): Promise<Cart | null>;
    incrementItemQuantity(userId: string, item: Item): Promise<Cart | null>;
    createCart(cart: Cart): Promise<Cart | null>;
    getCart(userId: string): Promise<Cart | null>;
    deleteCart(cartId: string): Promise<Cart | null>;
    updateCartItem(userId: string, item: UpdateItem): Promise<Cart | null>;
    deleteCartItem(userId: string, productId: string): Promise<Cart | null>;
    deleteAllCartItems(userId: string): Promise<Cart | null>;
}
