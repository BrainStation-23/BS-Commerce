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
exports.CreateProductSuccessResponseDto = exports.CreateProductErrorResponseDto = exports.CreateProductDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const product_dto_1 = require("./product.dto");
const class_transformer_1 = require("class-transformer");
const service_validator_1 = require("../../../../decorators/service.validator");
class CreateProductDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: product_dto_1.ProductInfoDto }),
    (0, service_validator_1.ValidateNested)(product_dto_1.ProductInfoDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", product_dto_1.ProductInfoDto)
], CreateProductDto.prototype, "info", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: product_dto_1.ProductMetaDto }),
    (0, class_validator_1.IsObject)(),
    (0, service_validator_1.ValidateNested)(product_dto_1.ProductMetaDto),
    __metadata("design:type", product_dto_1.ProductMetaDto)
], CreateProductDto.prototype, "meta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [product_dto_1.ProductPhotoDto], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, service_validator_1.ValidateNested)(product_dto_1.ProductPhotoDto),
    (0, class_transformer_1.Type)(() => product_dto_1.ProductPhotoDto),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "photos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "brands", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: product_dto_1.ProductManufacturerDto }),
    (0, class_validator_1.IsObject)(),
    (0, service_validator_1.ValidateNested)(product_dto_1.ProductManufacturerDto),
    __metadata("design:type", product_dto_1.ProductManufacturerDto)
], CreateProductDto.prototype, "manufacturer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [product_dto_1.ProductCategoryDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, service_validator_1.ValidateNested)(product_dto_1.ProductCategoryDto),
    (0, class_transformer_1.Type)(() => product_dto_1.ProductCategoryDto),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "categories", void 0);
exports.CreateProductDto = CreateProductDto;
class CreateProductErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CAN_NOT_CREATE_NEW_PRODUCT",
        examples: [
            "PRODUCT_SKU_MATCH",
            "PRODUCT_FRIENDLY_PAGE_NAME_MATCH",
            "CAN_NOT_CREATE_NEW_PRODUCT",
        ],
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateProductErrorResponseDto.prototype, "errors", void 0);
exports.CreateProductErrorResponseDto = CreateProductErrorResponseDto;
class CreateProductSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", product_dto_1.ProductDto)
], CreateProductSuccessResponseDto.prototype, "data", void 0);
exports.CreateProductSuccessResponseDto = CreateProductSuccessResponseDto;
//# sourceMappingURL=createProduct.dto.js.map