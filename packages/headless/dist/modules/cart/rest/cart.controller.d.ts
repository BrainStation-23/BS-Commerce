import { CartService } from '../services';
import { Response } from 'express';
import { User } from '../../../entity/user';
import { AddToCartRequestDto } from './dto/addToCart.dto';
import { deleteCartRequestDto } from './dto/deleteCart.dto';
import { updateCartItemRequestDto } from './dto/updateCartItem.dto';
import { deleteCartItemRequestDto } from './dto/deleteCartItem.dto';
export declare class CartController {
    private cartService;
    constructor(cartService: CartService);
    addToCart(item: AddToCartRequestDto, user: User, res: Response): Promise<{
        data: import("@bs-commerce/models").Cart;
    } | {
        error: import("@bs-commerce/models").addToCartErrorMessage;
        errors: DescriptiveError;
    }>;
    getCart(user: User, res: Response): Promise<{
        data: import("@bs-commerce/models").Cart;
    } | {
        error: import("@bs-commerce/models").getCartErrorMessage;
        errors: DescriptiveError;
    }>;
    deleteCart(data: deleteCartRequestDto, res: Response): Promise<{
        data: import("@bs-commerce/models").DeleteMessage;
    } | {
        error: import("@bs-commerce/models").deleteCartErrorMessage;
        errors: DescriptiveError;
    }>;
    updateCartItem(user: User, item: updateCartItemRequestDto, res: Response): Promise<{
        data: import("@bs-commerce/models").Cart;
    } | {
        error: import("@bs-commerce/models").updateCartItemErrorMessage;
        errors: DescriptiveError;
    }>;
    deleteCartItem(user: User, data: deleteCartItemRequestDto, res: Response): Promise<{
        data: import("@bs-commerce/models").Cart;
    } | {
        error: import("@bs-commerce/models").deleteCartItemErrorMessage;
        errors: DescriptiveError;
    }>;
    deleteAllCartItems(user: User, res: Response): Promise<{
        data: import("@bs-commerce/models").deleteAllCartItems;
    } | {
        error: import("@bs-commerce/models").deleteAllCartItemsErrorMessage;
        errors: DescriptiveError;
    }>;
}
