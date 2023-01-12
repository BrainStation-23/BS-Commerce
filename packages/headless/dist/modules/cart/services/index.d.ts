import { Helper } from '../../../helper/helper.interface';
import { CartRepository } from '../repositories';
import { AddToCartResponse, getCartResponse, deleteCartResponse, updateCartItemResponse, deleteCartItemResponse, deleteAllCartItemsResponse } from '@bs-commerce/models';
import { Item, UpdateItem } from '../../../entity/cart';
export declare class CartService {
    private cartRepo;
    private helper;
    constructor(cartRepo: CartRepository, helper: Helper);
    addToCart(item: Item, userId: string): Promise<AddToCartResponse>;
    getCart(userId: string): Promise<getCartResponse>;
    deleteCart(cartId: string): Promise<deleteCartResponse>;
    updateCartItem(userId: string, item: UpdateItem): Promise<updateCartItemResponse>;
    deleteCartItem(userId: string, productId: string): Promise<deleteCartItemResponse>;
    deleteAllCartItems(userId: string): Promise<deleteAllCartItemsResponse>;
}
