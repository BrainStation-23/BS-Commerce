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
exports.UpdateManufacturerSuccessResponseDto = exports.UpdateManufacturerErrorResponseDto = exports.UpdateManufacturerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const manufacturer_dto_1 = require("./manufacturer.dto");
const manufacturerSeo_dto_1 = require("./manufacturerSeo.dto");
const common_1 = require("@nestjs/common");
class UpdateManufacturerDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateManufacturerDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateManufacturerDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateManufacturerDto.prototype, "picture", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateManufacturerDto.prototype, "isPublished", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateManufacturerDto.prototype, "displayOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", manufacturerSeo_dto_1.ManufacturerSeoDto)
], UpdateManufacturerDto.prototype, "seo", void 0);
exports.UpdateManufacturerDto = UpdateManufacturerDto;
class UpdateManufacturerErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    __metadata("design:type", Number)
], UpdateManufacturerErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "MANUFACTURER_NOT_FOUND",
        examples: ["MANUFACTURER_NOT_UPDATED"],
    }),
    __metadata("design:type", String)
], UpdateManufacturerErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], UpdateManufacturerErrorResponseDto.prototype, "errors", void 0);
exports.UpdateManufacturerErrorResponseDto = UpdateManufacturerErrorResponseDto;
class ManufacturerDataDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", manufacturer_dto_1.ManufacturerDto)
], ManufacturerDataDto.prototype, "manufacturer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "MANUFACTURER_UPDATED_SUCCESSFULLY",
    }),
    __metadata("design:type", Object)
], ManufacturerDataDto.prototype, "message", void 0);
class UpdateManufacturerSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    __metadata("design:type", Number)
], UpdateManufacturerSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", ManufacturerDataDto)
], UpdateManufacturerSuccessResponseDto.prototype, "data", void 0);
exports.UpdateManufacturerSuccessResponseDto = UpdateManufacturerSuccessResponseDto;
//# sourceMappingURL=updateManufacturer.dto.js.map