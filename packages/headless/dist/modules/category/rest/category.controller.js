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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("../services");
const getCategory_dto_1 = require("./dto/getCategory.dto");
const getCategoryList_dto_1 = require("./dto/getCategoryList.dto");
const swagger_1 = require("@nestjs/swagger");
const getCategoryBySlug_dto_1 = require("./dto/getCategoryBySlug.dto");
const createCategory_dto_1 = require("./dto/createCategory.dto");
const auth_guard_1 = require("../../../guards/auth.guard");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async createCategory(category, res) {
        const _a = await this.categoryService.createCategory(category), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async getCategory(data, res) {
        const _a = await this.categoryService.getCategory(data.categoryId), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async getCategoryList(res) {
        const _a = await this.categoryService.getCategoryList(), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async getCategoryBySlug(data, res) {
        const _a = await this.categoryService.getCategoryBySlug(data.slug), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    (0, swagger_1.ApiResponse)({
        description: 'Create Category Api',
        type: createCategory_dto_1.createCategorySuccessResponseDto,
        status: common_1.HttpStatus.CREATED,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Error Response',
        type: createCategory_dto_1.createCategoryErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createCategory_dto_1.createCategoryRequestDto, Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "createCategory", null);
__decorate([
    (0, common_1.Get)(':categoryId'),
    (0, swagger_1.ApiResponse)({
        description: 'Get Category Api',
        type: getCategory_dto_1.getCategorySuccessResponseDto,
        status: common_1.HttpStatus.CREATED,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Error Response',
        type: getCategory_dto_1.getCategoryErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getCategory_dto_1.getCategoryRequestDto, Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategory", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        description: 'Get Category List API',
        type: getCategoryList_dto_1.getCategoryListSuccessResponseDto,
        status: common_1.HttpStatus.FOUND,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Error Response',
        type: getCategoryList_dto_1.getCategoryListErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategoryList", null);
__decorate([
    (0, common_1.Get)('slug/:slug'),
    (0, swagger_1.ApiResponse)({
        description: 'Get Category By Slug API',
        type: getCategoryBySlug_dto_1.getCategoryBySlugSuccessResponseDto,
        status: common_1.HttpStatus.FOUND,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Error Response',
        type: getCategoryBySlug_dto_1.getCategoryBySlugErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getCategoryBySlug_dto_1.getCategoryBySlugRequestDto, Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategoryBySlug", null);
CategoryController = __decorate([
    (0, common_1.Controller)('category'),
    (0, swagger_1.ApiTags)('Category API'),
    __metadata("design:paramtypes", [services_1.CategoryService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map