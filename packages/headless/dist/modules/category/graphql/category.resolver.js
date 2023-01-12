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
exports.CategoryResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_guard_1 = require("../../../guards/auth.guard");
const services_1 = require("../services");
const category_model_1 = require("./category.model");
const helper_interface_1 = require("../../../helper/helper.interface");
let CategoryResolver = class CategoryResolver {
    constructor(categoryService, helper) {
        this.categoryService = categoryService;
        this.helper = helper;
    }
    async getCategory(data) {
        const res = await this.categoryService.getCategory(data.categoryId);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async getCategoryList() {
        const res = await this.categoryService.getCategoryList();
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async getCategoryBySlug(data) {
        const res = await this.categoryService.getCategoryBySlug(data.slug);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async createCategory(category) {
        const res = await this.categoryService.createCategory(category);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
};
__decorate([
    (0, graphql_1.Query)(() => category_model_1.CategoryResponse, { nullable: true }),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_model_1.getCategoryRequestSchema]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "getCategory", null);
__decorate([
    (0, graphql_1.Query)(() => category_model_1.CategoryListResponse, { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "getCategoryList", null);
__decorate([
    (0, graphql_1.Query)(() => category_model_1.CategoryResponse, { nullable: true }),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_model_1.getCategoryBySlugRequestSchema]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "getCategoryBySlug", null);
__decorate([
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    (0, graphql_1.Mutation)(() => category_model_1.CategoryResponse),
    __param(0, (0, graphql_1.Args)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_model_1.createCategoryRequestSchema]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "createCategory", null);
CategoryResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [services_1.CategoryService,
        helper_interface_1.Helper])
], CategoryResolver);
exports.CategoryResolver = CategoryResolver;
//# sourceMappingURL=category.resolver.js.map