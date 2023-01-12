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
exports.UpdateProductsForBrandSuccessResponseDto = exports.UpdateProductsForBrandErrorResponseDto = exports.updateProductsForBrandRequestDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const _1 = require(".");
class updateProductsForBrandRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: [String] }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], updateProductsForBrandRequestDto.prototype, "productIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: String }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], updateProductsForBrandRequestDto.prototype, "brandId", void 0);
exports.updateProductsForBrandRequestDto = updateProductsForBrandRequestDto;
class UpdateProductsForBrandErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateProductsForBrandErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CAN_NOT_UPDATE_PRODUCTS",
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProductsForBrandErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UpdateProductsForBrandErrorResponseDto.prototype, "errors", void 0);
exports.UpdateProductsForBrandErrorResponseDto = UpdateProductsForBrandErrorResponseDto;
class UpdateProductsForBrandSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateProductsForBrandSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [_1.ProductDto] }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Array)
], UpdateProductsForBrandSuccessResponseDto.prototype, "data", void 0);
exports.UpdateProductsForBrandSuccessResponseDto = UpdateProductsForBrandSuccessResponseDto;
//# sourceMappingURL=updateProductsForBrand.dto.js.map