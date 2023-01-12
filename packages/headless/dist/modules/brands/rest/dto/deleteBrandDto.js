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
exports.DeleteBrandSuccessResponseDto = exports.DeleteBrandErrorResponseDto = void 0;
const brandDto_1 = require("./brandDto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
class DeleteBrandErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    __metadata("design:type", Number)
], DeleteBrandErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DeleteBrandErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], DeleteBrandErrorResponseDto.prototype, "errors", void 0);
exports.DeleteBrandErrorResponseDto = DeleteBrandErrorResponseDto;
class DeleteBrandSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    __metadata("design:type", Number)
], DeleteBrandSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", brandDto_1.BrandDto)
], DeleteBrandSuccessResponseDto.prototype, "data", void 0);
exports.DeleteBrandSuccessResponseDto = DeleteBrandSuccessResponseDto;
//# sourceMappingURL=deleteBrandDto.js.map