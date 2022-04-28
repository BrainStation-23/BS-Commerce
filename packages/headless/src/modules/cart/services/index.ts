import { HttpStatus, Injectable } from '@nestjs/common';
import * as Joi from 'joi';
import { validateParams } from 'src/decorators/service.validator';
import { Item } from 'src/entity/cart';
import { Helper } from 'src/helper/helper.interface';
import {
  ServiceErrorResponse,
  ServiceSuccessResponse,
} from 'src/helper/serviceResponse/service.response.interface';
import { CartRepository } from '../repositories';
import { ItemCreateSchema } from '../validators/cart.create.validator';

@Injectable()
export class CartService {
  constructor(private cartRepo: CartRepository, private helper: Helper) { }

  @validateParams(
    { schema: ItemCreateSchema },
    { schema: Joi.string().required() },
  )
  async addToCart(
    item: Item,
    userId: string,
  ): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const existCart = await this.cartRepo.isCartExist(userId);
    if (!existCart) {
      const createCart = await this.cartRepo.createCart(userId, [item]);
      if (!createCart) {
        return this.helper.serviceResponse.errorResponse(
          'Can not create cart',
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
          'Can not add item to the cart',
          null,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.helper.serviceResponse.successResponse(
        await this.cartRepo.getCartProduct( cart),
        HttpStatus.OK,
      );
    }

    const cart = await this.cartRepo.incrementItemQuantity(
      userId,
      item,
    );
    if (!cart) {
      return this.helper.serviceResponse.errorResponse(
        'Can not increment cart item',
        null,
        HttpStatus.BAD_REQUEST,
      );
    } else {
      return this.helper.serviceResponse.successResponse(
        await this.cartRepo.getCartProduct(cart,),
        HttpStatus.OK,
      );
    }
  }

  @validateParams({ schema: Joi.string().required() })
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

  @validateParams({ schema: Joi.string().required() })
  async deleteCart(
    cartId: string,
  ): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const cart = await this.cartRepo.deleteCart(cartId);
    if (!cart) {
      return this.helper.serviceResponse.errorResponse(
        'Error occurred while deleting cart',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.helper.serviceResponse.successResponse(
      cart,
      HttpStatus.OK,
    );
  }

  @validateParams(
    { schema: Joi.string().required() },
    { schema: ItemCreateSchema },
  )
  async updateCartItem(
    userId: string,
    item: Item,
  ): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    if (item.quantity && item.quantity > 0) {
      const cart = await this.cartRepo.updateCartItem(userId, item);
      if (!cart) {
        return this.helper.serviceResponse.errorResponse(
          'Error occurred while updating cart item',
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
        'Error occurred while deleting cart item',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.helper.serviceResponse.successResponse(
      await this.cartRepo.getCartProduct(deletedCart),
      HttpStatus.OK,
    );
  }

  @validateParams(
    { schema: Joi.string().required() },
    { schema: Joi.string().required() },
  )
  async deleteCartItem(
    userId: string,
    productId: string,
  ): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const cart = await this.cartRepo.deleteCartItem(userId, productId);
    if (!cart) {
      return this.helper.serviceResponse.errorResponse(
        'Error occurred while deleting cart item',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.helper.serviceResponse.successResponse(
      await this.cartRepo.getCartProduct(cart),
      HttpStatus.OK,
    );
  }

  @validateParams({ schema: Joi.string().required() })
  async deleteAllCartItems(
    userId: string,
  ): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const cart = await this.cartRepo.deleteAllCartItems(userId);
    if (!cart) {
      return this.helper.serviceResponse.errorResponse(
        'Error occurred while deleting all cart item',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.helper.serviceResponse.successResponse(cart, HttpStatus.OK);
  }
}
