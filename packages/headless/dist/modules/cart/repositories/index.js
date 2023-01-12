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
exports.CartRepository = void 0;
const cart_database_interface_1 = require("./cart.database.interface");
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
let CartRepository = class CartRepository {
    constructor(db) {
        this.db = db;
    }
    async isCartExist(userId) {
        return await this.db.isCartExist(userId);
    }
    async isItemExist(userId, productId) {
        return await this.db.isItemExist(userId, productId);
    }
    async addItem(userId, item) {
        return await this.db.addItem(userId, item);
    }
    async getCartProduct(cart) {
        return await this.db.getCartProduct(cart);
    }
    async incrementItemQuantity(userId, item) {
        return await this.db.incrementItemQuantity(userId, item);
    }
    async createCart(cart) {
        cart.id = (0, crypto_1.randomUUID)();
        return await this.db.createCart(cart);
    }
    async getCart(userId) {
        return await this.db.getCart(userId);
    }
    async deleteCart(cartId) {
        return await this.db.deleteCart(cartId);
    }
    async updateCartItem(userId, item) {
        return await this.db.updateCartItem(userId, item);
    }
    async deleteCartItem(userId, productId) {
        return await this.db.deleteCartItem(userId, productId);
    }
    async deleteAllCartItems(userId) {
        return await this.db.deleteAllCartItems(userId);
    }
};
CartRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cart_database_interface_1.ICartDatabase])
], CartRepository);
exports.CartRepository = CartRepository;
//# sourceMappingURL=index.js.map