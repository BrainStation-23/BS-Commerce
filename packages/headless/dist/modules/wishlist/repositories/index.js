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
exports.WishListRepository = void 0;
const common_1 = require("@nestjs/common");
const wishList_database_interface_1 = require("./wishList.database.interface");
const crypto_1 = require("crypto");
let WishListRepository = class WishListRepository {
    constructor(db) {
        this.db = db;
    }
    async doesItemExist(userId, productId) {
        return await this.db.getWishList({
            userId,
            'items.productId': productId,
        });
    }
    async incrementItemQuantity(userId, item) {
        return await this.db.incrementItemQuantity(userId, item);
    }
    async addItem(userId, item) {
        return await this.db.addWishListItem(userId, item);
    }
    async createWishlist(wishList) {
        wishList.id = (0, crypto_1.randomUUID)();
        return await this.db.createWishList(wishList);
    }
    async getUserWishlist(userId) {
        return await this.db.getWishList({ userId });
    }
    async getWishlistProduct(wishlist) {
        return await this.db.getWishlistProduct(wishlist);
    }
    async deleteWishlist(wishlistId) {
        return await this.db.deleteWishList(wishlistId);
    }
    async updateWishlistItem(userId, item) {
        return await this.db.updateWishlistItem(userId, item);
    }
    async deleteWishlistItem(userId, productId) {
        return await this.db.deleteWishlistItem(userId, productId);
    }
    async deleteAllWishlistItems(userId) {
        return await this.db.deleteAllWishlistItems(userId);
    }
};
WishListRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [wishList_database_interface_1.IWishListDatabase])
], WishListRepository);
exports.WishListRepository = WishListRepository;
//# sourceMappingURL=index.js.map