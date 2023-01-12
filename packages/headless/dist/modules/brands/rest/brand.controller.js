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
exports.BrandController = void 0;
const NestedObjectValidator_pipe_1 = require("../validators/NestedObjectValidator.pipe");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const index_1 = require("../services/index");
const getBrandByIdDto_1 = require("../../../modules/brands/rest/dto/getBrandByIdDto");
const createBrandDto_1 = require("../../../modules/brands/rest/dto/createBrandDto");
const getAllBrandsDto_1 = require("../../../modules/brands/rest/dto/getAllBrandsDto");
const updateBrandDto_1 = require("../../../modules/brands/rest/dto/updateBrandDto");
const deleteBrandDto_1 = require("../../../modules/brands/rest/dto/deleteBrandDto");
const updateBrandDto_2 = require("./dto/updateBrandDto");
const auth_guard_1 = require("../../../guards/auth.guard");
const UpdateValidationPipe_1 = require("../validators/UpdateValidationPipe");
let BrandController = class BrandController {
    constructor(brandService) {
        this.brandService = brandService;
    }
    async getAllBrands(skip, limit, res) {
        const _a = await this.brandService.getAllBrands(skip, limit), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async getBrandByName(name, res) {
        const _a = await this.brandService.getBrandByName(name), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async getBrand(brandId, res) {
        const _a = await this.brandService.getBrandById(brandId), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async createBrand(brand, res) {
        const _a = await this.brandService.createBrand(brand), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async updateBrand(brandId, featuresToUpdate, res) {
        const _a = await this.brandService.updateBrandById(brandId, featuresToUpdate), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async deleteBrandById(brandId, res) {
        const _a = await this.brandService.deleteBrandById(brandId), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'All the brands were fetched successfully',
        type: getAllBrandsDto_1.GetAllBrandsSuccessResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Brands could not be fetched ',
        type: getAllBrandsDto_1.GetAllBrandsErrorResponseDto,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'skip',
        type: Number,
        description: 'skip paramter is Optional',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        type: Number,
        description: 'limit parameter is Optional',
        required: false,
    }),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "getAllBrands", null);
__decorate([
    (0, common_1.Get)('brandName/:name'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Requested brand was fetched successfully',
        type: getBrandByIdDto_1.GetBrandByIdSuccessResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Invalid Brand Name ',
        type: getBrandByIdDto_1.GetBrandByIdErrorResponseDto,
    }),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "getBrandByName", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Requested brand was fetched successfully',
        type: getBrandByIdDto_1.GetBrandByIdSuccessResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Brand could not be fetched ',
        type: getBrandByIdDto_1.GetBrandByIdErrorResponseDto,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "getBrand", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Brand was created successfully',
        type: createBrandDto_1.CreateBrandSuccessResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Error creating new brand',
        type: createBrandDto_1.CreateBrandErrorResponseDto,
    }),
    __param(0, (0, common_1.Body)(NestedObjectValidator_pipe_1.ObjectValidationPipe)),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createBrandDto_1.CreateBrandRequestDto, Object]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "createBrand", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Brand was updated successfully',
        type: updateBrandDto_2.UpdateBrandSuccessResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Error updating existing brand',
        type: updateBrandDto_2.UpdateBrandErrorResponseDto,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(UpdateValidationPipe_1.UpdateValidationPipe)),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateBrandDto_1.UpdateBrandRequestdto, Object]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "updateBrand", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Brand was deleted successfully',
        type: deleteBrandDto_1.DeleteBrandSuccessResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Brand could not be deleted ',
        type: deleteBrandDto_1.DeleteBrandErrorResponseDto,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "deleteBrandById", null);
BrandController = __decorate([
    (0, swagger_1.ApiTags)('Brand API'),
    (0, common_1.Controller)('brands'),
    __metadata("design:paramtypes", [index_1.BrandService])
], BrandController);
exports.BrandController = BrandController;
//# sourceMappingURL=brand.controller.js.map