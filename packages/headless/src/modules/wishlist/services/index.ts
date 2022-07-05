import { HttpStatus, Injectable } from '@nestjs/common';
import { WishlistItem } from 'src/entity/wishList';
import { Helper } from 'src/helper/helper.interface';
import { WishListRepository } from '../repositories';
import {
  addToWishlistErrorMessage,
  AddToWishlistResponse,
  getUserWishlistErrorMessage,
  getUserWishlistResponse,
  deleteWishlistErrorMessage,
  deleteWishlistSuccessMessage,
  deleteWishlistResponse,
  deleteAllWishlistItemsSuccessMessage,
  deleteAllWishlistItemsErrorMessage,
  deleteWishlistItemResponse,
  deleteAllWishlistItemsResponse,
  deleteWishlistItemErrorMessage,
  updateWishlistItemErrorMessage,
  updateWishlistItemResponse,
} from 'models';

@Injectable()
export class WishListService {
  constructor(private wishListRepo: WishListRepository, private helper: Helper,) { }

  async addToWishList(userId: string, item: WishlistItem,): Promise<AddToWishlistResponse> {
    const doesWishListExist = await this.wishListRepo.getUserWishlist(userId);
    if (!doesWishListExist) {
      const wishList = await this.wishListRepo.createWishlist({ userId, items: [item] });
      if (!wishList) return this.helper.serviceResponse.errorResponse(addToWishlistErrorMessage.CAN_NOT_CREATE_WISHLIST, null, HttpStatus.INTERNAL_SERVER_ERROR,);
      return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishList), HttpStatus.CREATED);
    }

    const doesItemExist = await this.wishListRepo.doesItemExist(userId, item.productId);
    if (!doesItemExist) {
      const wishlist = await this.wishListRepo.addItem(userId, item);
      if (!wishlist) return this.helper.serviceResponse.errorResponse(addToWishlistErrorMessage.CAN_NOT_ADD_ITEM_TO_THE_WISHLIST, null, HttpStatus.BAD_REQUEST);
      return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishlist), HttpStatus.OK);
    }

    const wishList = await this.wishListRepo.incrementItemQuantity(userId, item);
    if (!wishList) return this.helper.serviceResponse.errorResponse(addToWishlistErrorMessage.CAN_NOT_INCREMENT_WISHLIST_ITEM, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishList), HttpStatus.OK);
  }

  async getUserWishlist(userId: string,): Promise<getUserWishlistResponse> {
    const wishList = await this.wishListRepo.getUserWishlist(userId);
    if (!wishList) return this.helper.serviceResponse.errorResponse(getUserWishlistErrorMessage.NO_WISHLIST_FOUND, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishList), HttpStatus.OK);
  }

  async deleteWishlist(wishlistId: string): Promise<deleteWishlistResponse> {
    const wishList = await this.wishListRepo.deleteWishlist(wishlistId);
    if (!wishList) return this.helper.serviceResponse.errorResponse(deleteWishlistErrorMessage.CAN_NOT_DELETE_WISHLIST, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse({ message: deleteWishlistSuccessMessage.WISHLIST_DELETED_SUCCESSFUL }, HttpStatus.OK);
  }

  async updateWishlistItem(item: WishlistItem, userId: string,): Promise<updateWishlistItemResponse> {
    if (item.quantity && item.quantity > 0) {
      const wishList = await this.wishListRepo.updateWishlistItem(userId, item);
      if (!wishList) return this.helper.serviceResponse.errorResponse(updateWishlistItemErrorMessage.CAN_NOT_UPDATE_WISHLIST_ITEM, null, HttpStatus.BAD_REQUEST);
      return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishList), HttpStatus.OK);
    }

    const wishList = await this.wishListRepo.deleteWishlistItem(userId, item.productId);
    if (!wishList) return this.helper.serviceResponse.errorResponse(updateWishlistItemErrorMessage.CAN_NOT_DELETE_WISHLIST_ITEM, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishList), HttpStatus.OK);
  }

  async deleteWishlistItem(productId: string, userId: string,): Promise<deleteWishlistItemResponse> {
    const wishList = await this.wishListRepo.deleteWishlistItem(userId, productId);
    if (!wishList) return this.helper.serviceResponse.errorResponse(deleteWishlistItemErrorMessage.CAN_NOT_DELETE_WISHLIST_ITEM, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishList), HttpStatus.OK);
  }

  async deleteAllWishlistItems(userId: string,): Promise<deleteAllWishlistItemsResponse> {
    const wishList = await this.wishListRepo.deleteAllWishlistItems(userId);
    if (!wishList) return this.helper.serviceResponse.errorResponse(deleteAllWishlistItemsErrorMessage.CAN_NOT_DELETE_ALL_WISHLIST_ITEMS, null, HttpStatus.BAD_REQUEST,);
    return this.helper.serviceResponse.successResponse({ message: deleteAllWishlistItemsSuccessMessage.WISHLIST_ITEMS_DELETED_SUCCESSFUL }, HttpStatus.OK);
  }
}