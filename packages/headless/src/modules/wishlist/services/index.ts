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
    const isWishListExist = await this.wishListRepo.isExistWishlist(userId);
    if (!isWishListExist) {
      const createdWishList = await this.wishListRepo.createWishlist(userId, [item,]);
      if (!createdWishList) return this.helper.serviceResponse.errorResponse("Cant't add to Wishlist", null, HttpStatus.BAD_REQUEST,);
      return this.helper.serviceResponse.successResponse(createdWishList);
    }

    const isItemExist = await this.wishListRepo.isExistItem(userId, item.product,);
    if (!isItemExist) {
      const addedItem = await this.wishListRepo.addItem(userId, item);
      if (!addedItem) return this.helper.serviceResponse.errorResponse("Cant't add item in Wishlist", null, HttpStatus.BAD_REQUEST);
      return this.helper.serviceResponse.successResponse(addedItem);
    }

    const incrementalItem = await this.wishListRepo.incrementItem(userId, item);
    if (!incrementalItem) return this.helper.serviceResponse.errorResponse("Cant't increment item in Wishlist", null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(incrementalItem);
  }

  @validateParams({ schema: Joi.string().required() })
  async getWishList(userId: string,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const wishList = await this.wishListRepo.getWishlist(userId);
    if (!wishList) return this.helper.serviceResponse.errorResponse("Cant't get Wishlist", null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(wishList);
  }

  @validateParams({ schema: Joi.string().required() })
  async getWishlistById(wishlistId: string,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const wishList = await this.wishListRepo.getWishlistById(wishlistId);
    if (!wishList) return this.helper.serviceResponse.errorResponse("Cant't get single Wishlist", null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(wishList);
  }

  @validateParams({ schema: Joi.string().required() })
  async deleteWishlistById(wishlistId: string): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const wishList = await this.wishListRepo.deleteWishlistById(wishlistId);
    if (!wishList) return this.helper.serviceResponse.errorResponse("Cant't delete Wishlist", null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(wishList);
  }

  @validateParams({ schema: ItemSchema }, { schema: Joi.string().required() })
  async updateWishlistItem(item: Item, userId: string,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    if (item.quantity && item.quantity > 0) {
      const wishList = await this.wishListRepo.updateWishlistItem(userId, item);
      if (!wishList) return this.helper.serviceResponse.errorResponse("Cant't update Wishlist Item", null, HttpStatus.BAD_REQUEST);
      return this.helper.serviceResponse.successResponse(wishList);
    }

    const wishList = await this.wishListRepo.deleteWishlistItem(userId, item);
    if (!wishList) return this.helper.serviceResponse.errorResponse("Cant't delete Wishlist Item", null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(wishList);
  }

  @validateParams({ schema: Joi.string().required() }, { schema: Joi.string().required() },)
  async deleteWishlistItem(product: string, userId: string,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const wishList = await this.wishListRepo.deleteWishlistItemByProductId(userId, product);
    if (!wishList) return this.helper.serviceResponse.errorResponse("Cant't delete Wishlist Item", null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(wishList);
  }

  @validateParams({ schema: Joi.string().required() })
  async getWishlistWithoutPopulate(userId: string,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const wishList = await this.wishListRepo.getWishlistWithoutPopulate(userId);
    if (!wishList) return this.helper.serviceResponse.errorResponse("Cant't get Wishlist without Populate", null, HttpStatus.BAD_REQUEST,);
    return this.helper.serviceResponse.successResponse(wishList);
  }

  @validateParams({ schema: Joi.string().required() })
  async deleteAllWishlistItems(userId: string,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const wishList = await this.wishListRepo.deleteAllWishlistItems(userId);
    if (!wishList) return this.helper.serviceResponse.errorResponse("Cant't delete User Wishlist all Item", null, HttpStatus.BAD_REQUEST,);
    return this.helper.serviceResponse.successResponse(wishList);
  }
}
