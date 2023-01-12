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
exports.CreateBrandErrorResponseDto = exports.CreateBrandSuccessResponseDto = exports.CreateBrandRequestDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const service_validator_1 = require("../../../../decorators/service.validator");
const brandDto_1 = require("./brandDto");
const infoDto_1 = require("./infoDto");
const metaDto_1 = require("./metaDto");
class CreateBrandRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: infoDto_1.InfoDto }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, service_validator_1.ValidateNested)(infoDto_1.InfoDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", infoDto_1.InfoDto)
], CreateBrandRequestDto.prototype, "info", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: metaDto_1.MetaDto }),
    (0, class_validator_1.IsOptional)(),
    (0, service_validator_1.ValidateNested)(metaDto_1.MetaDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", metaDto_1.MetaDto)
], CreateBrandRequestDto.prototype, "meta", void 0);
exports.CreateBrandRequestDto = CreateBrandRequestDto;
class CreateBrandSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.CREATED }),
    __metadata("design:type", Number)
], CreateBrandSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", brandDto_1.BrandDto)
], CreateBrandSuccessResponseDto.prototype, "data", void 0);
exports.CreateBrandSuccessResponseDto = CreateBrandSuccessResponseDto;
class CreateBrandErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    __metadata("design:type", Number)
], CreateBrandErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateBrandErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], CreateBrandErrorResponseDto.prototype, "errors", void 0);
exports.CreateBrandErrorResponseDto = CreateBrandErrorResponseDto;
//# sourceMappingURL=createBrandDto.js.map