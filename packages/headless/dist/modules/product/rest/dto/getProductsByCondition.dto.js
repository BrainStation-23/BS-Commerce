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
exports.GetProductsByConditionSuccessResponseDto = exports.GetProductsObject = exports.ConditionalProductProductDto = exports.GetProductsByConditionErrorResponseDto = exports.GetProductsByConditionQueryDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const product_dto_1 = require("./product.dto");
class GetProductsByConditionQueryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Number }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetProductsByConditionQueryDto.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Number }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetProductsByConditionQueryDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetProductsByConditionQueryDto.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetProductsByConditionQueryDto.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetProductsByConditionQueryDto.prototype, "productName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], GetProductsByConditionQueryDto.prototype, "isFeatured", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetProductsByConditionQueryDto.prototype, "slug", void 0);
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
], GetProductsByConditionQueryDto.prototype, "orderBy", void 0);
exports.GetProductsByConditionQueryDto = GetProductsByConditionQueryDto;
class GetProductsByConditionErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetProductsByConditionErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CAN_NOT_GET_PRODUCTS",
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetProductsByConditionErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], GetProductsByConditionErrorResponseDto.prototype, "errors", void 0);
exports.GetProductsByConditionErrorResponseDto = GetProductsByConditionErrorResponseDto;
class ConditionalProductProductDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: product_dto_1.ProductInfoDto }),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", product_dto_1.ProductInfoDto)
], ConditionalProductProductDto.prototype, "info", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [product_dto_1.ProductPhotoDto] }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ConditionalProductProductDto.prototype, "photos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ConditionalProductProductDto.prototype, "brands", void 0);
exports.ConditionalProductProductDto = ConditionalProductProductDto;
class GetProductsObject {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [ConditionalProductProductDto] }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Array)
], GetProductsObject.prototype, "products", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetProductsObject.prototype, "count", void 0);
exports.GetProductsObject = GetProductsObject;
class GetProductsByConditionSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetProductsByConditionSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", GetProductsObject)
], GetProductsByConditionSuccessResponseDto.prototype, "data", void 0);
exports.GetProductsByConditionSuccessResponseDto = GetProductsByConditionSuccessResponseDto;
//# sourceMappingURL=getProductsByCondition.dto.js.map