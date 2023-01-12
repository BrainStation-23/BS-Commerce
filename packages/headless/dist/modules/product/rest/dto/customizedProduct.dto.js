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
exports.GetCustomizedProductsSuccessResponseDto = exports.GetCustomizedProductsErrorResponseDto = exports.GetCustomizedProductsQueryDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const product_dto_1 = require("./product.dto");
class GetCustomizedProductsQueryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Number }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetCustomizedProductsQueryDto.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Number }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetCustomizedProductsQueryDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetCustomizedProductsQueryDto.prototype, "tag", void 0);
exports.GetCustomizedProductsQueryDto = GetCustomizedProductsQueryDto;
class GetCustomizedProductsErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetCustomizedProductsErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CAN_NOT_GET_CUSTOMIZED_PRODUCTS",
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetCustomizedProductsErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], GetCustomizedProductsErrorResponseDto.prototype, "errors", void 0);
exports.GetCustomizedProductsErrorResponseDto = GetCustomizedProductsErrorResponseDto;
class GetCustomizedProductsSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetCustomizedProductsSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [product_dto_1.ProductDto] }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Array)
], GetCustomizedProductsSuccessResponseDto.prototype, "data", void 0);
exports.GetCustomizedProductsSuccessResponseDto = GetCustomizedProductsSuccessResponseDto;
//# sourceMappingURL=customizedProduct.dto.js.map