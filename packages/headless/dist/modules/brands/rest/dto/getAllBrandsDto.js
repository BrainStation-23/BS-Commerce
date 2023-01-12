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
exports.GetAllBrandsErrorResponseDto = exports.GetAllBrandsSuccessResponseDto = exports.GetAllBrandsDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const brandDto_1 = require("./brandDto");
const class_transformer_1 = require("class-transformer");
class GetAllBrandsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [brandDto_1.BrandDto] }),
    (0, class_transformer_1.Type)(() => brandDto_1.BrandDto),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], GetAllBrandsDto.prototype, "brands", void 0);
exports.GetAllBrandsDto = GetAllBrandsDto;
class GetAllBrandsSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetAllBrandsSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", GetAllBrandsDto)
], GetAllBrandsSuccessResponseDto.prototype, "data", void 0);
exports.GetAllBrandsSuccessResponseDto = GetAllBrandsSuccessResponseDto;
class GetAllBrandsErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.INTERNAL_SERVER_ERROR }),
    __metadata("design:type", Number)
], GetAllBrandsErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetAllBrandsErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], GetAllBrandsErrorResponseDto.prototype, "errors", void 0);
exports.GetAllBrandsErrorResponseDto = GetAllBrandsErrorResponseDto;
//# sourceMappingURL=getAllBrandsDto.js.map