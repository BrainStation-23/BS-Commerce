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
exports.CompareController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_1 = require("../../../entity/user");
const auth_guard_1 = require("../../../guards/auth.guard");
const auth_decorator_1 = require("../../../decorators/auth.decorator");
const compare_dto_1 = require("./dto/compare.dto");
const services_1 = require("../services");
let CompareController = class CompareController {
    constructor(compareService) {
        this.compareService = compareService;
    }
    async addItemToComapre(user, body, res) {
        const _a = await this.compareService.addItemToCompare(user.id, body.productId), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async getCompareByUserId(user, res) {
        const _a = await this.compareService.getCompareByUserId(user.id), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async getCompareById(user, compareId, res) {
        const _a = await this.compareService.getCompareById(user.id, compareId), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async deleteCompareById(user, compareId, res) {
        const _a = await this.compareService.deleteCompareById(user.id, compareId), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async deleteItemByProductId(user, query, res) {
        const _a = await this.compareService.deleteItemByProductId(user.id, query.productId), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async deleteAllItemByUserId(user, res) {
        const _a = await this.compareService.deleteAllItemByUserId(user.id), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async getProduct(body, res) {
        const _a = await this.compareService.getProductDetails(body.productId), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
};
__decorate([
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['customer'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
        description: 'Add product to compare Success Response',
        type: compare_dto_1.CompareSuccessResponseDto,
        status: common_1.HttpStatus.CREATED,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Add product to compare Error Response',
        type: compare_dto_1.CompareErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User,
        compare_dto_1.AddToCompareDto, Object]),
    __metadata("design:returntype", Promise)
], CompareController.prototype, "addItemToComapre", null);
__decorate([
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['customer'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({
        description: 'Add product to compare Error Response',
        type: compare_dto_1.CompareErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Get compare by user',
        type: compare_dto_1.CompareSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, common_1.Get)(),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User, Object]),
    __metadata("design:returntype", Promise)
], CompareController.prototype, "getCompareByUserId", null);
__decorate([
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['customer'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({
        description: 'Add product to compare Error Response',
        type: compare_dto_1.CompareErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Get compare by compare id',
        type: compare_dto_1.CompareSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiParam)({ name: 'compareId', example: '' }),
    (0, common_1.Get)(':compareId'),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, common_1.Param)('compareId')),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User, String, Object]),
    __metadata("design:returntype", Promise)
], CompareController.prototype, "getCompareById", null);
__decorate([
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['customer'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({
        description: 'Add product to compare Error Response',
        type: compare_dto_1.CompareErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Delete compare by compare id',
        type: compare_dto_1.CompareSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiQuery)({ name: 'compareId', example: '' }),
    (0, common_1.Delete)(),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, common_1.Query)('compareId')),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User, String, Object]),
    __metadata("design:returntype", Promise)
], CompareController.prototype, "deleteCompareById", null);
__decorate([
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['customer'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({
        description: 'Add product to compare Error Response',
        type: compare_dto_1.CompareErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Delete compare item by product id',
        type: compare_dto_1.CompareSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiQuery)({ name: 'productId', example: '' }),
    (0, common_1.Delete)('item'),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User,
        compare_dto_1.AddToCompareDto, Object]),
    __metadata("design:returntype", Promise)
], CompareController.prototype, "deleteItemByProductId", null);
__decorate([
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['customer'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({
        description: 'Add product to compare Error Response',
        type: compare_dto_1.CompareErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Delete all compare items of user',
        type: compare_dto_1.CompareSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, common_1.Delete)('allitems'),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User, Object]),
    __metadata("design:returntype", Promise)
], CompareController.prototype, "deleteAllItemByUserId", null);
__decorate([
    (0, common_1.Post)('/public'),
    (0, swagger_1.ApiResponse)({
        description: 'Add product to compare Success Response',
        type: compare_dto_1.ComparePublicSuccessResponseDto,
        status: common_1.HttpStatus.CREATED,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Add product to compare Error Response',
        type: compare_dto_1.ComparePublicErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [compare_dto_1.AddToCompareDto, Object]),
    __metadata("design:returntype", Promise)
], CompareController.prototype, "getProduct", null);
CompareController = __decorate([
    (0, swagger_1.ApiTags)('Comparison API'),
    (0, common_1.Controller)('compare'),
    __metadata("design:paramtypes", [services_1.CompareService])
], CompareController);
exports.CompareController = CompareController;
//# sourceMappingURL=index.js.map