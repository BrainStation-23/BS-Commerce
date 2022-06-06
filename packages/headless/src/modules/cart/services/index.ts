import { HttpStatus, Injectable } from '@nestjs/common';
import { Helper } from 'src/helper/helper.interface';
import {
  ServiceErrorResponse,
  ServiceSuccessResponse,
} from 'src/helper/serviceResponse/service.response.interface';
import {ItemDto } from '../dto/addToCart.dto';
import { CartRepository } from '../repositories';
import { AddToCartResponse, ErrorMessage } from 'models';

@Injectable()
export class CartService {
  constructor(private cartRepo: CartRepository, private helper: Helper) { }

  async addToCart(
    item: ItemDto,
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
  ): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const cart = await this.cartRepo.getCart(userId);
    if (!cart) {
      return this.helper.serviceResponse.errorResponse(
        'No cart found with this id',
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
  ): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const cart = await this.cartRepo.deleteCart(cartId);
    if (!cart) {
      return this.helper.serviceResponse.errorResponse(
        'Can\'t delete cart',
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
    item: ItemDto,
  ): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    if (item.quantity && item.quantity > 0) {
      const cart = await this.cartRepo.updateCartItem(userId, item);
      if (!cart) {
        return this.helper.serviceResponse.errorResponse(
          'Can\'t update cart item',
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
        'Can\'t delete cart item',
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
  ): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const cart = await this.cartRepo.deleteCartItem(userId, productId);
    if (!cart) {
      return this.helper.serviceResponse.errorResponse(
        'Can\'t delete cart item',
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
  ): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const cart = await this.cartRepo.deleteAllCartItems(userId);
    if (!cart) {
      return this.helper.serviceResponse.errorResponse(
        'Can\'t delete all cart item',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.helper.serviceResponse.successResponse(cart, HttpStatus.OK);
  }
}
