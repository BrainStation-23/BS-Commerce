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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const helper_interface_1 = require("../../../helper/helper.interface");
const repositories_1 = require("../repositories");
let CartService = class CartService {
    constructor(cartRepo, helper) {
        this.cartRepo = cartRepo;
        this.helper = helper;
    }
    async addToCart(item, userId) {
        const existCart = await this.cartRepo.isCartExist(userId);
        const createCart = !existCart && (await this.cartRepo.createCart({ userId, items: [item] }));
        if (!createCart && !existCart) {
            return this.helper.serviceResponse.errorResponse("CAN_NOT_CREATE_CART", null, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!existCart) {
            return this.helper.serviceResponse.successResponse(await this.cartRepo.getCartProduct(createCart), common_1.HttpStatus.CREATED);
        }
        const isItemExist = await this.cartRepo.isItemExist(userId, item.productId);
        const addItemCart = !isItemExist && (await this.cartRepo.addItem(userId, item));
        if (!addItemCart && !isItemExist) {
            return this.helper.serviceResponse.errorResponse("CAN_NOT_ADD_ITEM_TO_THE_CART", null, common_1.HttpStatus.BAD_REQUEST);
        }
        if (!isItemExist) {
            return this.helper.serviceResponse.successResponse(await this.cartRepo.getCartProduct(addItemCart), common_1.HttpStatus.OK);
        }
        const cart = await this.cartRepo.incrementItemQuantity(userId, item);
        if (!cart) {
            return this.helper.serviceResponse.errorResponse("CAN_NOT_INCREMENT_CART_ITEM", null, common_1.HttpStatus.BAD_REQUEST);
        }
        else {
            return this.helper.serviceResponse.successResponse(await this.cartRepo.getCartProduct(cart), common_1.HttpStatus.OK);
        }
    }
    async getCart(userId) {
        const cart = await this.cartRepo.getCart(userId);
        if (!cart) {
            return this.helper.serviceResponse.errorResponse("NO_CART_FOUND", null, common_1.HttpStatus.BAD_REQUEST);
        }
        return this.helper.serviceResponse.successResponse(await this.cartRepo.getCartProduct(cart), common_1.HttpStatus.OK);
    }
    async deleteCart(cartId) {
        const cart = await this.cartRepo.deleteCart(cartId);
        if (!cart) {
            return this.helper.serviceResponse.errorResponse("CAN_NOT_REMOVE_CART", null, common_1.HttpStatus.BAD_REQUEST);
        }
        return this.helper.serviceResponse.successResponse({ message: "REMOVE_CART_SUCCESSFULLY" }, common_1.HttpStatus.OK);
    }
    async updateCartItem(userId, item) {
        const cart = item.quantity &&
            item.quantity > 0 &&
            (await this.cartRepo.updateCartItem(userId, item));
        if (!cart && item.quantity && item.quantity > 0) {
            return this.helper.serviceResponse.errorResponse("CAN_NOT_UPDATE_CART_ITEM", null, common_1.HttpStatus.BAD_REQUEST);
        }
        if (item.quantity && item.quantity > 0) {
            return this.helper.serviceResponse.successResponse(await this.cartRepo.getCartProduct(cart), common_1.HttpStatus.OK);
        }
        const deletedCart = await this.cartRepo.deleteCartItem(userId, item.productId);
        if (!deletedCart) {
            return this.helper.serviceResponse.errorResponse("CAN_NOT_REMOVE_CART_ITEM", null, common_1.HttpStatus.BAD_REQUEST);
        }
        return this.helper.serviceResponse.successResponse(await this.cartRepo.getCartProduct(deletedCart), common_1.HttpStatus.OK);
    }
    async deleteCartItem(userId, productId) {
        const cart = await this.cartRepo.deleteCartItem(userId, productId);
        if (!cart) {
            return this.helper.serviceResponse.errorResponse("CAN_NOT_REMOVE_CART_ITEM", null, common_1.HttpStatus.BAD_REQUEST);
        }
        return this.helper.serviceResponse.successResponse(await this.cartRepo.getCartProduct(cart), common_1.HttpStatus.OK);
    }
    async deleteAllCartItems(userId) {
        const cart = await this.cartRepo.deleteAllCartItems(userId);
        if (!cart) {
            return this.helper.serviceResponse.errorResponse("CAN_NOT_REMOVE_ALL_CART_ITEMS", null, common_1.HttpStatus.BAD_REQUEST);
        }
        return this.helper.serviceResponse.successResponse(cart, common_1.HttpStatus.OK);
    }
};
CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.CartRepository, helper_interface_1.Helper])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=index.js.map