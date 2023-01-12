"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishListService = void 0;
const common_1 = require("@nestjs/common");
const helper_interface_1 = require("../../../helper/helper.interface");
const repositories_1 = require("../repositories");
let WishListService = class WishListService {
    constructor(wishListRepo, helper) {
        this.wishListRepo = wishListRepo;
        this.helper = helper;
    }
    async addToWishList(userId, item) {
        const doesWishListExist = await this.wishListRepo.getUserWishlist(userId);
        if (!doesWishListExist) {
            const wishList = await this.wishListRepo.createWishlist({
                userId,
                items: [item],
            });
            if (!wishList)
                return this.helper.serviceResponse.errorResponse("CAN_NOT_CREATE_WISHLIST", null, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishList), common_1.HttpStatus.CREATED);
        }
        const doesItemExist = await this.wishListRepo.doesItemExist(userId, item.productId);
        if (!doesItemExist) {
            const wishlist = await this.wishListRepo.addItem(userId, item);
            if (!wishlist)
                return this.helper.serviceResponse.errorResponse("CAN_NOT_ADD_ITEM_TO_THE_WISHLIST", null, common_1.HttpStatus.BAD_REQUEST);
            return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishlist), common_1.HttpStatus.OK);
        }
        const wishList = await this.wishListRepo.incrementItemQuantity(userId, item);
        if (!wishList)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_INCREMENT_WISHLIST_ITEM", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishList), common_1.HttpStatus.OK);
    }
    async getUserWishlist(userId) {
        const wishList = await this.wishListRepo.getUserWishlist(userId);
        if (!wishList)
            return this.helper.serviceResponse.errorResponse("NO_WISHLIST_FOUND", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishList), common_1.HttpStatus.OK);
    }
    async deleteWishlist(wishlistId) {
        const wishList = await this.wishListRepo.deleteWishlist(wishlistId);
        if (!wishList)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_DELETE_WISHLIST", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse({ message: "WISHLIST_DELETED_SUCCESSFUL" }, common_1.HttpStatus.OK);
    }
    async updateWishlistItem(item, userId) {
        if (item.quantity && item.quantity > 0) {
            const wishList = await this.wishListRepo.updateWishlistItem(userId, item);
            if (!wishList)
                return this.helper.serviceResponse.errorResponse("CAN_NOT_UPDATE_WISHLIST_ITEM", null, common_1.HttpStatus.BAD_REQUEST);
            return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishList), common_1.HttpStatus.OK);
        }
        const wishList = await this.wishListRepo.deleteWishlistItem(userId, item.productId);
        if (!wishList)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_DELETE_WISHLIST_ITEM", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishList), common_1.HttpStatus.OK);
    }
    async deleteWishlistItem(productId, userId) {
        const wishList = await this.wishListRepo.deleteWishlistItem(userId, productId);
        if (!wishList)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_DELETE_WISHLIST_ITEM", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(await this.wishListRepo.getWishlistProduct(wishList), common_1.HttpStatus.OK);
    }
    async deleteAllWishlistItems(userId) {
        const wishList = await this.wishListRepo.deleteAllWishlistItems(userId);
        if (!wishList)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_DELETE_ALL_WISHLIST_ITEMS", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse({
            message: "WISHLIST_ITEMS_DELETED_SUCCESSFUL",
        }, common_1.HttpStatus.OK);
    }
};
WishListService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.WishListRepository,
        helper_interface_1.Helper])
], WishListService);
exports.WishListService = WishListService;
//# sourceMappingURL=index.js.map