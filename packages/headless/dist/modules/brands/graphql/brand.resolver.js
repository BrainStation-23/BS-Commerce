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
exports.BrandResolver = void 0;
const services_1 = require("../services");
const graphql_1 = require("@nestjs/graphql");
const brand_model_1 = require("./brand.model");
let BrandResolver = class BrandResolver {
    constructor(brandService) {
        this.brandService = brandService;
    }
    async getBrand(BrandId) {
        return await this.brandService.getBrandById(BrandId);
    }
    async getAllBrands(skip, limit) {
        return await this.brandService.getAllBrands(skip, limit);
    }
    async addNewBrand(brand) {
        return await this.brandService.createBrand(brand);
    }
    async deleteBrandById(brandId) {
        return await this.brandService.deleteBrandById(brandId);
    }
    async updateBrandById(brandId, brand) {
        return await this.brandService.updateBrandById(brandId, brand);
    }
};
__decorate([
    (0, graphql_1.Query)(() => brand_model_1.SingleBrandResponse),
    __param(0, (0, graphql_1.Args)('brandId', { type: () => String, nullable: false })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BrandResolver.prototype, "getBrand", null);
__decorate([
    (0, graphql_1.Query)(() => brand_model_1.BrandResponse),
    __param(0, (0, graphql_1.Args)('skip', { type: () => graphql_1.Int, nullable: true })),
    __param(1, (0, graphql_1.Args)('limit', { type: () => graphql_1.Int, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], BrandResolver.prototype, "getAllBrands", null);
__decorate([
    (0, graphql_1.Mutation)(() => brand_model_1.SingleBrandResponse),
    __param(0, (0, graphql_1.Args)('brand', { type: () => brand_model_1.BrandInput, nullable: false })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_model_1.BrandInput]),
    __metadata("design:returntype", Promise)
], BrandResolver.prototype, "addNewBrand", null);
__decorate([
    (0, graphql_1.Mutation)(() => brand_model_1.SingleBrandResponse),
    __param(0, (0, graphql_1.Args)('brandId', { type: () => String, nullable: false })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BrandResolver.prototype, "deleteBrandById", null);
__decorate([
    (0, graphql_1.Mutation)(() => brand_model_1.SingleBrandResponse),
    __param(0, (0, graphql_1.Args)('brandId', { type: () => String, nullable: false })),
    __param(1, (0, graphql_1.Args)('brand', { type: () => brand_model_1.BrandInput, nullable: false })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, brand_model_1.BrandInput]),
    __metadata("design:returntype", Promise)
], BrandResolver.prototype, "updateBrandById", null);
BrandResolver = __decorate([
    (0, graphql_1.Resolver)(() => brand_model_1.BrandModel),
    __metadata("design:paramtypes", [services_1.BrandService])
], BrandResolver);
exports.BrandResolver = BrandResolver;
//# sourceMappingURL=brand.resolver.js.map