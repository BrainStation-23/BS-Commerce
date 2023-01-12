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
exports.ComparePublicErrorResponseDto = exports.CompareErrorResponseDto = exports.ComparePublicSuccessResponseDto = exports.CompareSuccessResponseDto = exports.CompareDataDto = exports.CompareItemsDetails = exports.ProductDetails = exports.ProductMeta = exports.ProductInfo = exports.AddToCompareDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AddToCompareDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1dca45d8-b6d1-4767-9edb-6c9578913ca9' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(36),
    (0, class_validator_1.MinLength)(36),
    __metadata("design:type", String)
], AddToCompareDto.prototype, "productId", void 0);
exports.AddToCompareDto = AddToCompareDto;
class ProductInfo {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ProductInfo.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ProductInfo.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ProductInfo.prototype, "shortDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ProductInfo.prototype, "oldPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ProductInfo.prototype, "fullDescription", void 0);
exports.ProductInfo = ProductInfo;
class ProductMeta {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductMeta.prototype, "friendlyPageName", void 0);
exports.ProductMeta = ProductMeta;
class ProductDetails {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", ProductInfo)
], ProductDetails.prototype, "info", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", ProductMeta)
], ProductDetails.prototype, "meta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ProductDetails.prototype, "photos", void 0);
exports.ProductDetails = ProductDetails;
class CompareItemsDetails {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompareItemsDetails.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [ProductDetails] }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", ProductDetails)
], CompareItemsDetails.prototype, "productDetails", void 0);
exports.CompareItemsDetails = CompareItemsDetails;
class CompareDataDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompareDataDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompareDataDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [CompareItemsDetails] }),
    __metadata("design:type", Array)
], CompareDataDto.prototype, "items", void 0);
exports.CompareDataDto = CompareDataDto;
class CompareSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    __metadata("design:type", Number)
], CompareSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", CompareDataDto)
], CompareSuccessResponseDto.prototype, "data", void 0);
exports.CompareSuccessResponseDto = CompareSuccessResponseDto;
class ComparePublicSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    __metadata("design:type", Number)
], ComparePublicSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [CompareItemsDetails] }),
    __metadata("design:type", Array)
], ComparePublicSuccessResponseDto.prototype, "data", void 0);
exports.ComparePublicSuccessResponseDto = ComparePublicSuccessResponseDto;
class CompareErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CompareErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        examples: [
            "CAN_NOT_ADD_ITEM_FOR_COMPARING.",
            "COMPARISON_LIST_IS_EMPTY.",
            "COMPARISON_NOT_FOUND.",
            "COMPARISON_CAN_NOT_BE_DELETED_OR_NOT_EXIST.",
            "ITEM_CAN_NOT_BE_DELETED.",
            "INVALID PRODUCT ID",
        ],
    }),
    __metadata("design:type", String)
], CompareErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], CompareErrorResponseDto.prototype, "errors", void 0);
exports.CompareErrorResponseDto = CompareErrorResponseDto;
class ComparePublicErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ComparePublicErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CAN_NOT_ADD_ITEM_FOR_COMPARING.",
    }),
    __metadata("design:type", String)
], ComparePublicErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], ComparePublicErrorResponseDto.prototype, "errors", void 0);
exports.ComparePublicErrorResponseDto = ComparePublicErrorResponseDto;
//# sourceMappingURL=compare.dto.js.map