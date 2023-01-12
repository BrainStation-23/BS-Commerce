"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishListDatabase = void 0;
const common_1 = require("@nestjs/common");
const product_model_1 = require("../product/product.model");
const wishList_model_1 = require("./wishList.model");
let WishListDatabase = class WishListDatabase {
    async getWishlistProduct(wishlist) {
        const products = await product_model_1.ProductModel.find({
            id: { $in: wishlist.items.map((item) => item.productId) },
        }).select('info photos meta.friendlyPageName id -_id');
        const map = new Map();
        for (let i = 0, len = products.length; i < len; i++) {
            map.set(products[i].id, products[i]);
        }
        return Object.assign(Object.assign({}, wishlist), { items: wishlist.items.map((item) => {
                return Object.assign(Object.assign({}, item), { product: map.get(item.productId) });
            }) });
    }
    async incrementItemQuantity(userId, item) {
        return await wishList_model_1.WishListModel.findOneAndUpdate({
            userId,
            'items.productId': item.productId,
        }, { $inc: { 'items.$.quantity': item.quantity } }, { new: true })
            .lean()
            .exec();
    }
    async addWishListItem(userId, item) {
        return await wishList_model_1.WishListModel.findOneAndUpdate({ userId }, { $push: { items: item } }, { new: true })
            .lean()
            .exec();
    }
    async createWishList(wishlist) {
        const createdWishlist = await wishList_model_1.WishListModel.create(wishlist);
        return createdWishlist.toObject();
    }
    async getWishList(query) {
        return await wishList_model_1.WishListModel.findOne(query).lean();
    }
    async deleteWishList(wishlistId) {
        return await wishList_model_1.WishListModel.findOneAndRemove({ id: wishlistId }).lean();
    }
    async updateWishlistItem(userId, item) {
        return await wishList_model_1.WishListModel.findOneAndUpdate({
            userId,
            'items.productId': item.productId,
        }, { $set: { 'items.$.quantity': item.quantity } }, { new: true })
            .lean()
            .exec();
    }
    async deleteWishlistItem(userId, productId) {
        return await wishList_model_1.WishListModel.findOneAndUpdate({ userId, 'items.productId': productId }, { $pull: { items: { productId } } }, { new: true })
            .lean()
            .exec();
    }
    async deleteAllWishlistItems(userId) {
        return wishList_model_1.WishListModel.findOneAndUpdate({ userId }, { $set: { items: [] } }, { new: true })
            .lean()
            .exec();
    }
};
WishListDatabase = __decorate([
    (0, common_1.Injectable)()
], WishListDatabase);
exports.WishListDatabase = WishListDatabase;
//# sourceMappingURL=index.js.map