"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompareDatabase = void 0;
const product_model_1 = require("../product/product.model");
const compare_model_1 = require("./compare.model");
class CompareDatabase {
    async getCompareListByUserId(userId) {
        const compareList = await compare_model_1.CompareModel.findOne({
            userId,
        }).lean();
        return compareList ? await this.mappedProductDetails(compareList) : null;
    }
    async getCompareListById(userId, compareId) {
        const compareList = await compare_model_1.CompareModel.findOne({
            id: compareId,
            userId,
        }).lean();
        return compareList ? await this.mappedProductDetails(compareList) : null;
    }
    async addItemToCompare(userId, productId) {
        const isExist = await compare_model_1.CompareModel.findOne({ items: productId });
        if (!isExist) {
            const compareList = await compare_model_1.CompareModel.findOneAndUpdate({ userId: userId }, {
                $push: {
                    items: {
                        $each: [productId],
                        $sort: { created_at: 1 },
                        $slice: -3,
                    },
                },
            }, { new: true }).lean();
            return compareList ? await this.mappedProductDetails(compareList) : null;
        }
        return null;
    }
    async getProductDetails(productId) {
        const productDetails = await product_model_1.ProductModel.find({
            id: productId,
        }).select('info meta.friendlyPageName photos id -_id');
        if (!productDetails)
            return null;
        const mappedItems = productDetails.map((e) => {
            const { name, price, shortDescription, fullDescription, oldPrice } = e.info;
            return {
                productId: e.id,
                productDetails: {
                    info: { name, price, shortDescription, fullDescription, oldPrice },
                    meta: e.meta,
                    photos: e.photos.map((e) => e.url),
                },
            };
        });
        return mappedItems;
    }
    async createCompare(userId, productId) {
        const compareList = await compare_model_1.CompareModel.create({
            userId: userId,
            items: [productId],
        });
        return compareList ? await this.getCompareListByUserId(userId) : null;
    }
    async deleteCompareById(userId, compareId) {
        return await compare_model_1.CompareModel.findOneAndRemove({
            id: compareId,
            userId,
        }).lean();
    }
    async getProduct(productId) {
        const isExist = await compare_model_1.CompareModel.findOne({
            items: { productId: productId },
        });
        if (isExist)
            return true;
        else
            return false;
    }
    async deleteItemByProductId(userId, productId) {
        const compareList = await compare_model_1.CompareModel.findOneAndUpdate({
            userId: userId,
        }, { $pull: { items: { productId } } }, { new: true }).lean();
        return compareList ? await this.mappedProductDetails(compareList) : null;
    }
    async deleteAllItemByUserId(userId) {
        return await compare_model_1.CompareModel.findOneAndUpdate({
            userId: userId,
        }, { $set: { items: [] } }, { new: true }).lean();
    }
    async mappedProductDetails(compareList) {
        const productIds = compareList.items.map((item) => item.productId);
        const productDetails = await product_model_1.ProductModel.find({
            id: { $in: productIds },
        }).select('info meta.friendlyPageName photos id -_id');
        const mappedItems = productDetails.map((e) => {
            const { name, price, shortDescription, fullDescription, oldPrice } = e.info;
            return {
                productId: e.id,
                productDetails: {
                    info: { name, price, shortDescription, fullDescription, oldPrice },
                    meta: e.meta,
                    photos: e.photos.map((e) => e.url),
                },
            };
        });
        compareList.items = mappedItems;
        return compareList;
    }
}
exports.CompareDatabase = CompareDatabase;
//# sourceMappingURL=index.js.map