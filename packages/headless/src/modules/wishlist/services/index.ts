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
    const doesWishListExist = await this.wishListRepo.getUserWishlist(userId);
    if (!doesWishListExist) {
      const wishList = await this.wishListRepo.createWishlist(userId, [item]);
      if (!wishList) return this.helper.serviceResponse.errorResponse("Can't add to your Wishlist.", null, HttpStatus.INTERNAL_SERVER_ERROR,);
      return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishList), HttpStatus.CREATED);
    }

    const doesItemExist = await this.wishListRepo.doesItemExist(userId, item.productId);
    if (!doesItemExist) {
      const wishlist = await this.wishListRepo.addItem(userId, item);
      if (!wishlist) return this.helper.serviceResponse.errorResponse("Can't add an item to your Wishlist.", null, HttpStatus.BAD_REQUEST);
      return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishlist), HttpStatus.OK);
    }

    const wishList = await this.wishListRepo.incrementItemQuantity(userId, item);
    if (!wishList) return this.helper.serviceResponse.errorResponse("Can't increment item in Wishlist.", null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishList), HttpStatus.OK);
  }

  @validateParams({ schema: Joi.string().required() })
  async getUserWishlist(userId: string,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const wishList = await this.wishListRepo.getUserWishlist(userId);
    if (!wishList) return this.helper.serviceResponse.errorResponse("Can't get the Wishlist.", null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishList), HttpStatus.OK);
  }


  @validateParams({ schema: Joi.string().required() })
  async getWishlist(wishlistId: string,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const wishList = await this.wishListRepo.getWishlist(wishlistId);
    if (!wishList) return this.helper.serviceResponse.errorResponse("Can't get the single Wishlist.", null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishList), HttpStatus.OK);
  }

  @validateParams({ schema: Joi.string().required() })
  async deleteWishlist(wishlistId: string): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const wishList = await this.wishListRepo.deleteWishlist(wishlistId);
    if (!wishList) return this.helper.serviceResponse.errorResponse("Can't delete Wishlist.", null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishList), HttpStatus.OK);
  }

  @validateParams({ schema: ItemSchema }, { schema: Joi.string().required() })
  async updateWishlistItem(item: Item, userId: string,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    if (item.quantity && item.quantity > 0) {
      const wishList = await this.wishListRepo.updateWishlistItem(userId, item);
      if (!wishList) return this.helper.serviceResponse.errorResponse("Can't update Wishlist Item.", null, HttpStatus.BAD_REQUEST);
      return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishList), HttpStatus.OK);
    }

    const wishList = await this.wishListRepo.deleteWishlistItem(userId, item.productId);
    if (!wishList) return this.helper.serviceResponse.errorResponse("Can't delete Wishlist Item.", null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishList), HttpStatus.OK);
  }

  @validateParams({ schema: Joi.string().required() }, { schema: Joi.string().required() },)
  async deleteWishlistItem(productId: string, userId: string,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const wishList = await this.wishListRepo.deleteWishlistItem(userId, productId);
    if (!wishList) return this.helper.serviceResponse.errorResponse("Can't delete Wishlist Item.", null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishList), HttpStatus.OK);
  }

  @validateParams({ schema: Joi.string().required() })
  async deleteAllWishlistItems(userId: string,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const wishList = await this.wishListRepo.deleteAllWishlistItems(userId);
    if (!wishList) return this.helper.serviceResponse.errorResponse("Can't delete User Wishlist Items.", null, HttpStatus.BAD_REQUEST,);
    return this.helper.serviceResponse.successResponse(wishList, HttpStatus.OK);
  }
}
