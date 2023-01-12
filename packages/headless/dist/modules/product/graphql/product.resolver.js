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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_guard_1 = require("../../../guards/auth.guard");
const helper_interface_1 = require("../../../helper/helper.interface");
const services_1 = require("../services");
const product_model_1 = require("./product.model");
let ProductResolver = class ProductResolver {
    constructor(productService, helper) {
        this.productService = productService;
        this.helper = helper;
    }
    async getCustomerProduct(productId) {
        const res = await this.productService.getCustomerProduct(productId);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async getCustomerProductByURL(url) {
        const res = await this.productService.getCustomerProductByURL(url);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async getCustomerAllProducts(condition) {
        const res = await this.productService.getCustomerProductsByCondition(condition);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async getCustomerHomePageProducts() {
        const res = await this.productService.getCustomerAllHomePageProducts();
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async getProduct(productId) {
        const res = await this.productService.getProduct(productId);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async getAllProducts(query) {
        const res = await this.productService.getAllProducts(query);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async getProductCount() {
        const res = await this.productService.getProductCount();
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async getProductBySKU(sku) {
        const res = await this.productService.getProductBySKU(sku);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async getProductsByCondition(condition) {
        const res = await this.productService.getProductsByCondition(condition);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async createProduct(product) {
        const res = await this.productService.createProduct(product);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async deleteProduct(productId) {
        const res = await this.productService.deleteProduct(productId);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async updateProduct(product, productId) {
        const res = await this.productService.updateProduct(product, productId);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async updateProductsForBrand(data) {
        const res = await this.productService.updateProductsForBrand(data.productIds, data.brandId);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
};
__decorate([
    (0, graphql_1.Query)(() => product_model_1.ProductResponse),
    __param(0, (0, graphql_1.Args)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getCustomerProduct", null);
__decorate([
    (0, graphql_1.Query)(() => product_model_1.ProductResponse),
    __param(0, (0, graphql_1.Args)('url')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getCustomerProductByURL", null);
__decorate([
    (0, graphql_1.Query)(() => product_model_1.ProductArrayWithBrandAndManufacturersResponse),
    __param(0, (0, graphql_1.Args)('condition')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.GetCustomerAllProductsQueryInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getCustomerAllProducts", null);
__decorate([
    (0, graphql_1.Query)(() => product_model_1.ProductArrayResponse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getCustomerHomePageProducts", null);
__decorate([
    (0, graphql_1.Query)(() => product_model_1.ProductResponse),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    __param(0, (0, graphql_1.Args)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProduct", null);
__decorate([
    (0, graphql_1.Query)(() => product_model_1.ProductArrayResponse),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    __param(0, (0, graphql_1.Args)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.GetAllProductsQueryInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getAllProducts", null);
__decorate([
    (0, graphql_1.Query)(() => product_model_1.ProductCount),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProductCount", null);
__decorate([
    (0, graphql_1.Query)(() => product_model_1.ProductResponse),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    __param(0, (0, graphql_1.Args)('sku')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProductBySKU", null);
__decorate([
    (0, graphql_1.Query)(() => product_model_1.ProductArrayWithCountResponse),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    __param(0, (0, graphql_1.Args)('condition')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.SearchConditionInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProductsByCondition", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_model_1.ProductResponse),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    __param(0, (0, graphql_1.Args)('product')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.GraphqlProductInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "createProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_model_1.ProductDeletedResponse),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    __param(0, (0, graphql_1.Args)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "deleteProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_model_1.ProductResponse),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    __param(0, (0, graphql_1.Args)('product')),
    __param(1, (0, graphql_1.Args)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.UpdateProductInput, String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "updateProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_model_1.ProductArrayResponse),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.UpdateProductsForBrandBody]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "updateProductsForBrand", null);
ProductResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [services_1.ProductService, helper_interface_1.Helper])
], ProductResolver);
exports.ProductResolver = ProductResolver;
//# sourceMappingURL=product.resolver.js.map