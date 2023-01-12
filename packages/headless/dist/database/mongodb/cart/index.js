"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartDatabase = void 0;
const cart_model_1 = require("./cart.model");
const common_1 = require("@nestjs/common");
const product_model_1 = require("../product/product.model");
let CartDatabase = class CartDatabase {
    async addItem(userId, item) {
        return await cart_model_1.CartModel.findOneAndUpdate({ userId }, { $push: { items: item } }, { new: true })
            .select('-_id')
            .lean()
            .exec();
    }
    async isCartExist(userId) {
        return await cart_model_1.CartModel.findOne({ userId }).lean().exec();
    }
    async getCartProduct(cart) {
        const products = await product_model_1.ProductModel.find({
            id: { $in: cart.items.map((item) => item.productId) },
        }).select('info photos id meta.friendlyPageName -_id');
        const map = new Map();
        for (let i = 0, len = products.length; i < len; i++) {
            map.set(products[i].id, products[i]);
        }
        return Object.assign(Object.assign({}, cart), { items: cart.items.map((item) => {
                return Object.assign(Object.assign({}, item), { product: map.get(item.productId) });
            }) });
    }
    async isItemExist(userId, productId) {
        return await cart_model_1.CartModel.findOne({
            userId,
            'items.productId': productId,
        }).lean();
    }
    async incrementItemQuantity(userId, item) {
        return await cart_model_1.CartModel.findOneAndUpdate({
            userId,
            'items.productId': item.productId,
        }, { $inc: { 'items.$.quantity': item.quantity } }, { new: true })
            .select('-_id')
            .lean()
            .exec();
    }
    async createCart(cart) {
        const newCart = await cart_model_1.CartModel.create(cart);
        return await newCart.toObject();
    }
    async getCart(userId) {
        return await cart_model_1.CartModel.findOne({ userId }).select('-_id').lean();
    }
    async deleteCart(cartId) {
        return cart_model_1.CartModel.findOneAndRemove({ id: cartId }).select('-_id').lean();
    }
    async updateCartItem(userId, item) {
        return await cart_model_1.CartModel.findOneAndUpdate({
            userId,
            'items.productId': item.productId,
        }, { $set: { 'items.$.quantity': item.quantity } }, { new: true })
            .select('-_id')
            .lean()
            .exec();
    }
    async deleteCartItem(userId, productId) {
        return await cart_model_1.CartModel.findOneAndUpdate({ userId, 'items.productId': productId }, { $pull: { items: { productId } } }, { new: true })
            .select('-_id')
            .lean()
            .exec();
    }
    async deleteAllCartItems(userId) {
        return cart_model_1.CartModel.findOneAndUpdate({ userId }, { $set: { items: [] } }, { new: true })
            .select('-_id')
            .lean()
            .exec();
    }
};
CartDatabase = __decorate([
    (0, common_1.Injectable)()
], CartDatabase);
exports.CartDatabase = CartDatabase;
//# sourceMappingURL=index.js.map