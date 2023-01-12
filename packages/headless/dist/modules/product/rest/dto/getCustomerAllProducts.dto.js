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
exports.GetCustomerAllProductsSuccessResponseDto = exports.GetCustomerAllProductsResponse = exports.GetCustomerAllProductsErrorResponseDto = exports.GetCustomerAllProductsQueryDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const customerProduct_dto_1 = require("./customerProduct.dto");
class GetCustomerAllProductsQueryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Number }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetCustomerAllProductsQueryDto.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Number }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetCustomerAllProductsQueryDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetCustomerAllProductsQueryDto.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetCustomerAllProductsQueryDto.prototype, "manufacturer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetCustomerAllProductsQueryDto.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetCustomerAllProductsQueryDto.prototype, "productName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], GetCustomerAllProductsQueryDto.prototype, "isFeatured", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Category Slug',
        default: 'realme',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetCustomerAllProductsQueryDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Price Low to High -> asc or High to Low -> desc',
        default: 'asc',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['asc', 'desc']),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetCustomerAllProductsQueryDto.prototype, "orderBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 0, type: Number }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetCustomerAllProductsQueryDto.prototype, "minPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 10000, type: Number }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetCustomerAllProductsQueryDto.prototype, "maxPrice", void 0);
exports.GetCustomerAllProductsQueryDto = GetCustomerAllProductsQueryDto;
class GetCustomerAllProductsErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetCustomerAllProductsErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CAN_NOT_GET_ALL_PRODUCTS",
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetCustomerAllProductsErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], GetCustomerAllProductsErrorResponseDto.prototype, "errors", void 0);
exports.GetCustomerAllProductsErrorResponseDto = GetCustomerAllProductsErrorResponseDto;
class GetCustomerAllProductsResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [customerProduct_dto_1.CustomerProductDto] }),
    __metadata("design:type", Array)
], GetCustomerAllProductsResponse.prototype, "products", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [String] }),
    __metadata("design:type", Array)
], GetCustomerAllProductsResponse.prototype, "manufacturers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [String] }),
    __metadata("design:type", Array)
], GetCustomerAllProductsResponse.prototype, "brands", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    __metadata("design:type", Number)
], GetCustomerAllProductsResponse.prototype, "totalProducts", void 0);
exports.GetCustomerAllProductsResponse = GetCustomerAllProductsResponse;
class GetCustomerAllProductsSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetCustomerAllProductsSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => GetCustomerAllProductsResponse }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", GetCustomerAllProductsResponse)
], GetCustomerAllProductsSuccessResponseDto.prototype, "data", void 0);
exports.GetCustomerAllProductsSuccessResponseDto = GetCustomerAllProductsSuccessResponseDto;
//# sourceMappingURL=getCustomerAllProducts.dto.js.map