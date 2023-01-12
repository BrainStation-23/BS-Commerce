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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const services_1 = require("../services");
const auth_guard_1 = require("../../../guards/auth.guard");
const dto_1 = require("./dto");
const customizedProduct_dto_1 = require("./dto/customizedProduct.dto");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async getCustomerAllProducts(condition, res) {
        const _a = await this.productService.getCustomerProductsByCondition(condition), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async getCustomerProductByURL(params, res) {
        const _a = await this.productService.getCustomerProductByURL(params.url), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async getCustomerProduct(params, res) {
        const _a = await this.productService.getCustomerProduct(params.productId), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async getCustomerHomePageProducts(res) {
        const _a = await this.productService.getCustomerAllHomePageProducts(), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async getAllProducts(query, res) {
        const { skip, limit } = query;
        const _a = await this.productService.getAllProducts({
            skip,
            limit,
        }), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async getProductCount(res) {
        const _a = await this.productService.getProductCount(), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async getProductBySKU(params, res) {
        const _a = await this.productService.getProductBySKU(params.sku), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async getProductsByCondition(condition, res) {
        const _a = await this.productService.getProductsByCondition(condition), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async getProduct(params, res) {
        const _a = await this.productService.getProduct(params.productId), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async addProduct(product, res) {
        const _a = await this.productService.createProduct(product), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async deleteProduct(params, res) {
        const _a = await this.productService.deleteProduct(params.productId), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async updateProductsForBrand(data, res) {
        const { productIds, brandId } = data;
        const _a = await this.productService.updateProductsForBrand(productIds, brandId), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async updateProduct(product, params, res) {
        const _a = await this.productService.updateProduct(product, params.productId), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async getCustomizedProducts(condition, res) {
        const _a = await this.productService.getCustomizedProducts(condition), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
};
__decorate([
    (0, common_1.Get)('customer/products'),
    (0, swagger_1.ApiResponse)({
        description: 'Get All Products Success Response',
        type: dto_1.GetCustomerAllProductsSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Get All Products Error Response',
        type: dto_1.GetCustomerAllProductsErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.GetCustomerAllProductsQueryDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getCustomerAllProducts", null);
__decorate([
    (0, common_1.Get)('customer/product/:url'),
    (0, swagger_1.ApiResponse)({
        description: 'Get Single Product Success Response',
        type: dto_1.GetCustomerProductByURLSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Get Single Product Error Response',
        type: dto_1.GetCustomerProductByURLErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.GetCustomerProductByURLParamsDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getCustomerProductByURL", null);
__decorate([
    (0, common_1.Get)('customer/products/:productId'),
    (0, swagger_1.ApiResponse)({
        description: 'Get Product Success Response',
        type: dto_1.GetCustomerProductSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Get Product Error Response',
        type: dto_1.GetCustomerProductErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.GetCustomerProductParamsDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getCustomerProduct", null);
__decorate([
    (0, common_1.Get)('customer/home-page-products'),
    (0, swagger_1.ApiResponse)({
        description: 'Get All Home Page Products Success Response',
        type: dto_1.GetCustomerAllHomePageProductsSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Get All Home Page Products Error Response',
        type: dto_1.GetCustomerAllHomePageProductsErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getCustomerHomePageProducts", null);
__decorate([
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('products'),
    (0, swagger_1.ApiResponse)({
        description: 'Get All Product Success Response',
        type: dto_1.GetAllProductsSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Get All Product Error Response',
        type: dto_1.GetAllProductsErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.GetAllProductsQueryDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProducts", null);
__decorate([
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('products/count'),
    (0, swagger_1.ApiResponse)({
        description: 'Get All Product Count Success Response',
        type: dto_1.GetProductCountSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Get All Product Count Error Response',
        type: dto_1.GetProductCountErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductCount", null);
__decorate([
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('products/sku/:sku'),
    (0, swagger_1.ApiParam)({ name: 'sku' }),
    (0, swagger_1.ApiResponse)({
        description: 'Get Product by SKU Success Response',
        type: dto_1.GetProductBySKUSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Get Product by SKU Error Response',
        type: dto_1.GetProductBySKUErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.GetProductBySKUParamsDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductBySKU", null);
__decorate([
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('products/condition'),
    (0, swagger_1.ApiResponse)({
        description: 'Get Products By Condition Success Response',
        type: dto_1.GetProductsByConditionSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Get Products By Condition Error Response',
        type: dto_1.GetProductsByConditionErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.GetProductsByConditionQueryDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductsByCondition", null);
__decorate([
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('products/:productId'),
    (0, swagger_1.ApiParam)({ name: 'productId' }),
    (0, swagger_1.ApiResponse)({
        description: 'Get Product Success Response',
        type: dto_1.GetProductSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Get Product Error Response',
        type: dto_1.GetProductErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.GetProductParamsDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProduct", null);
__decorate([
    (0, common_1.Post)('product'),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({
        description: 'Create Product Success Response',
        type: dto_1.CreateProductSuccessResponseDto,
        status: common_1.HttpStatus.CREATED,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Create Product Error Response',
        type: dto_1.CreateProductErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "addProduct", null);
__decorate([
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)('products/:productId'),
    (0, swagger_1.ApiParam)({ name: 'productId' }),
    (0, swagger_1.ApiResponse)({
        description: 'Delete Product Success Response',
        type: dto_1.DeleteProductSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Delete Product Error Response',
        type: dto_1.DeleteProductErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.DeleteProductParamsDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
__decorate([
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)('products/brand'),
    (0, swagger_1.ApiResponse)({
        description: 'Update Products For Brand Success Response',
        type: dto_1.UpdateProductsForBrandSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Update Products For Brand Error Response',
        type: dto_1.UpdateProductsForBrandErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.updateProductsForBrandRequestDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProductsForBrand", null);
__decorate([
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)('products/:productId'),
    (0, swagger_1.ApiParam)({ name: 'productId' }),
    (0, swagger_1.ApiResponse)({
        description: 'Update Product Success Response',
        type: dto_1.UpdateProductSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Update Product Error Response',
        type: dto_1.UpdateProductErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateProductDto,
        dto_1.UpdateProductParamsDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Get)('customer/customize-home-page-products'),
    (0, swagger_1.ApiResponse)({
        description: 'Get Customized Products Success Response',
        type: customizedProduct_dto_1.GetCustomizedProductsSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Get Customized Products Error Response',
        type: customizedProduct_dto_1.GetCustomizedProductsErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customizedProduct_dto_1.GetCustomizedProductsQueryDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getCustomizedProducts", null);
ProductController = __decorate([
    (0, swagger_1.ApiTags)('Product API'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [services_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=index.js.map