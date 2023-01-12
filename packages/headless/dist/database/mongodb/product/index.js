"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDatabase = void 0;
const common_1 = require("@nestjs/common");
const category_model_1 = require("../category/category.model");
const order_model_1 = require("../order/order.model");
const tags_model_1 = require("../tags/tags.model");
const product_model_1 = require("./product.model");
let ProductDatabase = class ProductDatabase {
    async findProduct(query) {
        return await product_model_1.ProductModel.findOne(query, '-_id').lean();
    }
    async createProduct(product) {
        return await product_model_1.ProductModel.create(product);
    }
    async findAllProducts(query, skip, limit, price, orderBy) {
        const sort = { 'info.price': orderBy, createdAt: -1 };
        return await product_model_1.ProductModel.find(Object.assign(Object.assign({}, query), { 'info.price': {
                $gte: (price === null || price === void 0 ? void 0 : price.minPrice) || 0,
                $lte: (price === null || price === void 0 ? void 0 : price.maxPrice) || Number.MAX_SAFE_INTEGER,
            } }), '-_id')
            .sort(sort)
            .skip(skip)
            .limit(limit)
            .lean();
    }
    async getAllConditionalProducts(query, price, slug, orderBy, skip, limit) {
        const categories = await category_model_1.CategoryModel.find({
            $or: [{ slug: slug }, { 'ancestors.slug': slug }],
        }).lean();
        const categoryIdList = categories &&
            categories.length &&
            categories.map((category) => {
                return category.id;
            });
        const { maxPrice, minPrice } = price;
        const sort = { 'info.price': orderBy };
        return await product_model_1.ProductModel.find(Object.assign(Object.assign({}, query), { 'categories.id': { $in: categoryIdList }, 'info.price': {
                $gte: minPrice || 0,
                $lte: maxPrice || Number.MAX_SAFE_INTEGER,
            } }), '-_id')
            .sort(sort)
            .skip(skip)
            .limit(limit)
            .lean();
    }
    async getProductCount(query) {
        return await product_model_1.ProductModel.find(query, '-_id').lean().count();
    }
    async deleteProduct(productId) {
        return await product_model_1.ProductModel.findOneAndRemove({ id: productId }).lean();
    }
    async updateProduct(product, productId) {
        return await product_model_1.ProductModel.findOneAndUpdate({ id: productId }, { $set: product }, { new: true })
            .lean()
            .exec();
    }
    async updateProductsForBrand(productIds, brandId) {
        await product_model_1.ProductModel.updateMany({ id: { $in: productIds } }, { $addToSet: { brands: brandId } }, { multi: true }).exec();
        return await product_model_1.ProductModel.find({ id: { $in: productIds } }).lean();
    }
    async getProductsList(skip, limit, query, sortCondition) {
        return await product_model_1.ProductModel.find(query, '-_id')
            .sort(sortCondition)
            .skip(skip)
            .limit(limit)
            .lean();
    }
    async getTag(query) {
        return await tags_model_1.TagsModel.findOne(query).select('-_id').lean();
    }
    async getTopSellingProducts(skip, limit) {
        const orderArray = await order_model_1.OrderModel.aggregate([
            { $unwind: '$products' },
            {
                $match: {
                    orderedDate: {
                        $gte: new Date(Date.now() - 7 * 60 * 60 * 24 * 1000),
                    },
                },
            },
            {
                $group: {
                    _id: '$products.id',
                    totalOrderQuantity: {
                        $sum: '$products.info.quantity',
                    },
                },
            },
            {
                $match: {
                    totalOrderQuantity: {
                        $gte: 5,
                    },
                },
            },
            { $sort: { totalOrderQuantity: -1 } },
        ]);
        const productsIds = orderArray.map(function (item) {
            return item._id;
        });
        return await product_model_1.ProductModel.find({ id: { $in: productsIds } })
            .skip(skip)
            .limit(limit)
            .lean();
    }
    async getNewArrivalProducts(skip, limit) {
        return await product_model_1.ProductModel.find({
            createdAt: { $gte: new Date(Date.now() - 3 * 60 * 60 * 24 * 1000) },
        })
            .skip(skip)
            .limit(limit)
            .lean();
    }
};
ProductDatabase = __decorate([
    (0, common_1.Injectable)()
], ProductDatabase);
exports.ProductDatabase = ProductDatabase;
//# sourceMappingURL=index.js.map