import { HttpStatus, Injectable } from '@nestjs/common';
import { Item } from 'src/entity/wishList';
import * as Joi from 'joi';
import { validateParams } from 'src/decorators/service.validator';
import { Helper } from 'src/helper/helper.interface';
import { ServiceErrorResponse, ServiceSuccessResponse, } from 'src/helper/serviceResponse/service.response.interface';
import { WishListRepository } from '../repositories';
import { ItemSchema } from '../validators/item.validator';
@Injectable()
export class WishListService {
  constructor(private wishListRepo: WishListRepository, private helper: Helper,) { }

  @validateParams({ schema: Joi.string().required() }, { schema: ItemSchema })
  async addToWishList(userId: string, item: Item,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const isWishListExist = await this.wishListRepo.getUserWishlist(userId);
    if (!isWishListExist) {
      const createdWishList = await this.wishListRepo.createWishlist(userId, [item]);
      if (!createdWishList) return this.helper.serviceResponse.errorResponse("Cant't add to Wishlist", null, HttpStatus.INTERNAL_SERVER_ERROR,);
      return this.helper.serviceResponse.successResponse(createdWishList, HttpStatus.CREATED);
    }

    const isItemExist = await this.wishListRepo.isExistItem(userId, item.product);
    if (!isItemExist) {
      const addedItem = await this.wishListRepo.addItem(userId, item);
      if (!addedItem) return this.helper.serviceResponse.errorResponse("Cant't add item in Wishlist", null, HttpStatus.BAD_REQUEST);
      return this.helper.serviceResponse.successResponse(addedItem, HttpStatus.OK);
    }

    const incrementalItem = await this.wishListRepo.incrementItem(userId, item);
    if (!incrementalItem) return this.helper.serviceResponse.errorResponse("Cant't increment item in Wishlist", null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(incrementalItem, HttpStatus.OK);
  }

  @validateParams({ schema: Joi.string().required() })
  async getUserWishlist(userId: string,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const wishList = await this.wishListRepo.getUserWishlist(userId);
    if (!wishList) return this.helper.serviceResponse.errorResponse("Cant't get Wishlist", null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(wishList, HttpStatus.OK);
  }

  @validateParams({ schema: Joi.string().required() })
  async getWishlist(wishlistId: string,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const wishList = await this.wishListRepo.getWishlist(wishlistId);
    if (!wishList) return this.helper.serviceResponse.errorResponse("Cant't get single Wishlist", null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(wishList, HttpStatus.OK);
  }

  @validateParams({ schema: Joi.string().required() })
  async deleteWishlist(wishlistId: string): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const wishList = await this.wishListRepo.deleteWishlist(wishlistId);
    if (!wishList) return this.helper.serviceResponse.errorResponse("Cant't delete Wishlist", null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(wishList, HttpStatus.OK);
  }

  @validateParams({ schema: ItemSchema }, { schema: Joi.string().required() })
  async updateWishlistItem(item: Item, userId: string,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    if (item.quantity && item.quantity > 0) {
      const wishList = await this.wishListRepo.updateWishlistItem(userId, item);
      if (!wishList) return this.helper.serviceResponse.errorResponse("Cant't update Wishlist Item", null, HttpStatus.BAD_REQUEST);
      return this.helper.serviceResponse.successResponse(wishList, HttpStatus.OK);
    }

    const wishList = await this.wishListRepo.deleteWishlistItem(userId, item.product);
    if (!wishList) return this.helper.serviceResponse.errorResponse("Cant't delete Wishlist Item", null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(wishList, HttpStatus.OK);
  }

  @validateParams({ schema: Joi.string().required() }, { schema: Joi.string().required() },)
  async deleteWishlistItem(product: string, userId: string,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const wishList = await this.wishListRepo.deleteWishlistItem(userId, product);
    if (!wishList) return this.helper.serviceResponse.errorResponse("Cant't delete Wishlist Item", null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(wishList, HttpStatus.OK);
  }

  @validateParams({ schema: Joi.string().required() })
  async deleteAllWishlistItems(userId: string,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const wishList = await this.wishListRepo.deleteAllWishlistItems(userId);
    if (!wishList) return this.helper.serviceResponse.errorResponse("Cant't delete user Wishlist Items", null, HttpStatus.BAD_REQUEST,);
    return this.helper.serviceResponse.successResponse(wishList, HttpStatus.OK);
  }
}
