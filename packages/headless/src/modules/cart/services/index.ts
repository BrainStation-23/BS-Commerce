import { HttpStatus, Injectable } from '@nestjs/common';
import { Helper } from 'src/helper/helper.interface';
import { CartRepository } from '../repositories';
import { AddToCartResponse, getCartResponse, ErrorMessage, getCartErrorMessage, deleteCartErrorMessage, updateCartItemErrorMessage, deleteCartItemErrorMessage, deleteAllCartItemsErrorMessage, deleteCartResponse, updateCartItemResponse, deleteCartItemResponse, deleteAllCartItemsResponse } from 'models';
import { Item, UpdateItem } from 'src/entity/cart';

@Injectable()
export class CartService {
  constructor(private cartRepo: CartRepository, private helper: Helper) { }

  async addToCart(
    item: Item,
    userId: string,
  ): Promise<AddToCartResponse> {
    const existCart = await this.cartRepo.isCartExist(userId);
    if (!existCart) {
      const createCart = await this.cartRepo.createCart({ userId, items: [item] });
      if (!createCart) {
        return this.helper.serviceResponse.errorResponse(
          ErrorMessage.CANNOT_CREATE_CART,
          null,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      return this.helper.serviceResponse.successResponse(
        await this.cartRepo.getCartProduct(createCart),
        HttpStatus.CREATED,
      );
    }

    const isItemExist = await this.cartRepo.isItemExist(userId, item.productId);
    if (!isItemExist) {
      const cart = await this.cartRepo.addItem(userId, item);
      if (!cart) {
        return this.helper.serviceResponse.errorResponse(
          ErrorMessage.CANNOT_ADD_ITEM_TO_THE_CART,
          null,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.helper.serviceResponse.successResponse(
        await this.cartRepo.getCartProduct(cart),
        HttpStatus.OK,
      );
    }

    const cart = await this.cartRepo.incrementItemQuantity(
      userId,
      item,
    );
    if (!cart) {
      return this.helper.serviceResponse.errorResponse(
        ErrorMessage.CANNOT_INCREMENT_CART_ITEM,
        null,
        HttpStatus.BAD_REQUEST,
      );
    } else {
      return this.helper.serviceResponse.successResponse(
        await this.cartRepo.getCartProduct(cart),
        HttpStatus.OK,
      );
    }
  }

  async getCart(
    userId: string,
  ): Promise<getCartResponse> {
    const cart = await this.cartRepo.getCart(userId);
    if (!cart) {
      return this.helper.serviceResponse.errorResponse(
        getCartErrorMessage.NO_CART_FOUND,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.helper.serviceResponse.successResponse(
      await this.cartRepo.getCartProduct(cart),
      HttpStatus.OK,
    );
  }

  async deleteCart(
    cartId: string,
  ): Promise<deleteCartResponse> {
    const cart = await this.cartRepo.deleteCart(cartId);
    if (!cart) {
      return this.helper.serviceResponse.errorResponse(
        deleteCartErrorMessage.CAN_NOT_DELETE_CART,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.helper.serviceResponse.successResponse(
      cart,
      HttpStatus.OK,
    );
  }

  async updateCartItem(
    userId: string,
    item: UpdateItem,
  ): Promise<updateCartItemResponse> {
    if (item.quantity && item.quantity > 0) {
      const cart = await this.cartRepo.updateCartItem(userId, item);
      if (!cart) {
        return this.helper.serviceResponse.errorResponse(
          updateCartItemErrorMessage.CAN_NOT_UPDATE_CART_ITEM,
          null,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.helper.serviceResponse.successResponse(
        await this.cartRepo.getCartProduct(cart),
        HttpStatus.OK,
      );
    }
    const deletedCart = await this.cartRepo.deleteCartItem(
      userId,
      item.productId,
    );
    if (!deletedCart) {
      return this.helper.serviceResponse.errorResponse(
        updateCartItemErrorMessage.CAN_NOT_DELETE_CART_ITEM,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.helper.serviceResponse.successResponse(
      await this.cartRepo.getCartProduct(deletedCart),
      HttpStatus.OK,
    );
  }

  async deleteCartItem(
    userId: string,
    productId: string,
  ): Promise<deleteCartItemResponse> {
    const cart = await this.cartRepo.deleteCartItem(userId, productId);
    if (!cart) {
      return this.helper.serviceResponse.errorResponse(
        deleteCartItemErrorMessage.CAN_NOT_DELETE_CART_ITEM,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.helper.serviceResponse.successResponse(
      await this.cartRepo.getCartProduct(cart),
      HttpStatus.OK,
    );
  }

  async deleteAllCartItems(
    userId: string,
  ): Promise<deleteAllCartItemsResponse> {
    const cart = await this.cartRepo.deleteAllCartItems(userId);
    if (!cart) {
      return this.helper.serviceResponse.errorResponse(
        deleteAllCartItemsErrorMessage.CAN_NOT_DELETE_ALL_CART_ITEMS,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.helper.serviceResponse.successResponse(cart, HttpStatus.OK);
  }
}
