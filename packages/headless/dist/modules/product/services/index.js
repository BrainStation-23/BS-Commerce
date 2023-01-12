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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const helper_interface_1 = require("../../../helper/helper.interface");
const repositories_1 = require("../repositories");
let ProductService = class ProductService {
    constructor(productRepo, helper) {
        this.productRepo = productRepo;
        this.helper = helper;
    }
    async createProduct(product) {
        const skuMatch = await this.productRepo.findProduct({
            'info.sku': product.info.sku,
        });
        if (skuMatch)
            return this.helper.serviceResponse.errorResponse("PRODUCT_SKU_MATCH", null, common_1.HttpStatus.BAD_REQUEST);
        product.meta.friendlyPageName = await this.urlGenerate(product.info.name);
        const friendlyPageNameMatch = await this.productRepo.findProduct({
            'meta.friendlyPageName': product.meta.friendlyPageName,
        });
        if (friendlyPageNameMatch)
            return this.helper.serviceResponse.errorResponse("PRODUCT_FRIENDLY_PAGE_NAME_MATCH", null, common_1.HttpStatus.BAD_REQUEST);
        const newProduct = await this.productRepo.createProduct(product);
        if (!newProduct)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_CREATE_NEW_PRODUCT", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(newProduct, common_1.HttpStatus.CREATED);
    }
    async getProduct(productId) {
        const product = await this.productRepo.findProduct({ id: productId });
        if (!product)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_GET_PRODUCT", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(product, common_1.HttpStatus.OK);
    }
    async urlGenerate(productName) {
        return productName
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/&/g, '-and-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    }
    async getAllProducts(condition) {
        const { skip, limit } = condition;
        const products = await this.productRepo.findAllProducts({}, skip, limit);
        if (!products)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_GET_ALL_PRODUCTS", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(products, common_1.HttpStatus.OK);
    }
    async getProductCount() {
        const count = await this.productRepo.getProductCount({});
        if (!count)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_GET_PRODUCT_COUNT", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse({ count }, common_1.HttpStatus.OK);
    }
    async getProductBySKU(sku) {
        const product = await this.productRepo.findProduct({ 'info.sku': sku });
        if (!product)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_GET_PRODUCT", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(product, common_1.HttpStatus.OK);
    }
    async deleteProduct(productId) {
        const product = await this.productRepo.deleteProduct(productId);
        if (!product)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_DELETE_PRODUCT", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse({ message: "PRODUCT_DELETED_SUCCESSFUL" }, common_1.HttpStatus.OK);
    }
    async updateProduct(product, productId) {
        var _a, _b, _c;
        const getProduct = await this.productRepo.findProduct({ id: productId });
        if (!getProduct)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_GET_PRODUCT", null, common_1.HttpStatus.BAD_REQUEST);
        product.info = Object.assign(Object.assign({}, getProduct.info), product.info);
        product.meta = Object.assign(Object.assign({}, getProduct.meta), product.meta);
        const skuMatch = ((_a = product.info) === null || _a === void 0 ? void 0 : _a.sku) &&
            (await this.productRepo.findProduct({
                'info.sku': product.info.sku,
                id: { $ne: productId },
            }));
        if (skuMatch)
            return this.helper.serviceResponse.errorResponse("PRODUCT_SKU_MATCH", null, common_1.HttpStatus.BAD_REQUEST);
        product.info && ((_b = product.info) === null || _b === void 0 ? void 0 : _b.name)
            ? (product.meta.friendlyPageName = await this.urlGenerate(product.info.name))
            : null;
        const friendlyPageNameMatch = ((_c = product.meta) === null || _c === void 0 ? void 0 : _c.friendlyPageName) &&
            (await this.productRepo.findProduct({
                'meta.friendlyPageName': product.meta.friendlyPageName,
                id: { $ne: productId },
            }));
        if (friendlyPageNameMatch)
            return this.helper.serviceResponse.errorResponse("PRODUCT_FRIENDLY_PAGE_NAME_MATCH", null, common_1.HttpStatus.BAD_REQUEST);
        const updatedProduct = await this.productRepo.updateProduct(product, productId);
        if (!updatedProduct)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_UPDATE_PRODUCT", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(updatedProduct, common_1.HttpStatus.OK);
    }
    async updateProductsForBrand(productIds, brandId) {
        const products = await this.productRepo.updateProductsForBrand(productIds, brandId);
        if (!products)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_UPDATE_PRODUCTS", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(products);
    }
    async getProductsByCondition(condition) {
        const { skip, limit, slug, orderBy } = condition;
        const query = !slug && this.generateSearchQuery(condition);
        const products = slug
            ? await this.productRepo.getAllConditionalProducts({}, {}, slug, orderBy, skip, limit)
            : await this.productRepo.findAllProducts(query, skip, limit);
        if (!products)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_GET_PRODUCTS", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse({
            products,
            count: products.length || 0,
        });
    }
    generateSearchQuery(condition) {
        const { brand, categoryId, productName, isFeatured, manufacturer } = condition;
        const query = {};
        if (brand !== undefined && brand !== '') {
            query.brands = brand;
        }
        if (categoryId !== undefined && categoryId !== '') {
            query['categories.id'] = categoryId;
        }
        if (manufacturer !== undefined && manufacturer !== '') {
            query['manufacturer.name'] = manufacturer;
        }
        if (productName !== undefined && productName !== '') {
            query['info.name'] = new RegExp(productName, 'i');
        }
        if (isFeatured !== undefined) {
            query['info.isFeatured'] = isFeatured;
        }
        return query;
    }
    async getCustomerProduct(productId) {
        const product = await this.productRepo.findProduct({
            id: productId,
            'info.published': true,
        });
        if (!product)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_GET_PRODUCT", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(product, common_1.HttpStatus.OK);
    }
    async getCustomerProductByURL(url) {
        const product = await this.productRepo.findProduct({
            'meta.friendlyPageName': url,
            'info.published': true,
        });
        if (!product)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_GET_PRODUCT", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(product, common_1.HttpStatus.OK);
    }
    async getCustomerAllHomePageProducts() {
        const products = await this.productRepo.findAllProducts({
            'info.showOnHomePage': true,
            'info.published': true,
        });
        if (!products)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_GET_ALL_PRODUCTS", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(products, common_1.HttpStatus.OK);
    }
    async getCustomerProductsByCondition(condition) {
        const { skip, limit, slug, orderBy, maxPrice, minPrice } = condition;
        const query = this.generateSearchQuery(condition);
        const products = slug
            ? await this.productRepo.getAllConditionalProducts(Object.assign(Object.assign({}, query), { 'info.published': true }), { maxPrice, minPrice }, slug, orderBy, skip, limit)
            : await this.productRepo.findAllProducts(Object.assign(Object.assign({}, query), { 'info.published': true }), skip, limit, { maxPrice, minPrice }, orderBy);
        const productsCount = slug
            ? await this.productRepo.getAllConditionalProducts(Object.assign(Object.assign({}, query), { 'info.published': true }), { maxPrice, minPrice }, slug, orderBy)
            : await this.productRepo.findAllProducts(Object.assign(Object.assign({}, query), { 'info.published': true }), null, null, { maxPrice, minPrice }, orderBy);
        if (!products)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_GET_PRODUCTS", null, common_1.HttpStatus.BAD_REQUEST);
        const manufacturers = new Set();
        const brands = new Set();
        products.length &&
            products.forEach((product) => {
                var _a, _b, _c;
                (product === null || product === void 0 ? void 0 : product.manufacturer) && manufacturers.add((_a = product === null || product === void 0 ? void 0 : product.manufacturer) === null || _a === void 0 ? void 0 : _a.name);
                ((_b = product.brands) === null || _b === void 0 ? void 0 : _b.length) &&
                    ((_c = product.brands) === null || _c === void 0 ? void 0 : _c.forEach((brand) => {
                        brands.add(brand);
                    }));
            });
        return this.helper.serviceResponse.successResponse({
            products,
            manufacturers: new Array(...manufacturers),
            brands: new Array(...brands),
            totalProducts: productsCount.length,
        }, common_1.HttpStatus.OK);
    }
    async getCustomizedProducts(condition) {
        const { skip, limit, tag } = condition;
        const doesTagMatch = await this.productRepo.getTag({
            name: tag,
            isHomePageProductsTag: true,
        });
        if (!doesTagMatch)
            return this.helper.serviceResponse.errorResponse("INVALID_TAG_NAME", null, common_1.HttpStatus.BAD_REQUEST);
        const product = await this.getProductByTags(skip, limit, tag);
        if (!product)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_GET_CUSTOMIZED_PRODUCTS", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(product, common_1.HttpStatus.OK);
    }
    async getProductByTags(skip, limit, tag) {
        switch (tag) {
            case "TOP_SELLING_PRODUCTS":
                return await this.productRepo.getTopSellingProducts(skip, limit);
            case "NEW_ARRIVAL":
                return await this.productRepo.getNewArrivalProducts(skip, limit);
            default:
                return [];
        }
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.ProductRepository, helper_interface_1.Helper])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=index.js.map