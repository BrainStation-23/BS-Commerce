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
exports.CreateManufacturerSuccessResponseDto = exports.CreateManufacturerErrorResponseDto = exports.CreateManufacturerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const manufacturer_dto_1 = require("./manufacturer.dto");
const manufacturerSeo_dto_1 = require("./manufacturerSeo.dto");
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const service_validator_1 = require("../../../../decorators/service.validator");
class CreateManufacturerDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], CreateManufacturerDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateManufacturerDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateManufacturerDto.prototype, "picture", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateManufacturerDto.prototype, "isPublished", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateManufacturerDto.prototype, "displayOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: manufacturerSeo_dto_1.ManufacturerSeoDto, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.IsObject)(),
    (0, class_transformer_1.Type)(() => manufacturerSeo_dto_1.ManufacturerSeoDto),
    (0, service_validator_1.ValidateNested)(manufacturerSeo_dto_1.ManufacturerSeoDto),
    __metadata("design:type", manufacturerSeo_dto_1.ManufacturerSeoDto)
], CreateManufacturerDto.prototype, "seo", void 0);
exports.CreateManufacturerDto = CreateManufacturerDto;
class CreateManufacturerErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    __metadata("design:type", Number)
], CreateManufacturerErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "MANUFACTURER_NOT_CREATED_SUCCESSFULLY",
        examples: [
            "MANUFACTURER_ALREADY_EXISTS",
            "MANUFACTURER_NOT_CREATED_SUCCESSFULLY",
        ],
    }),
    __metadata("design:type", String)
], CreateManufacturerErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], CreateManufacturerErrorResponseDto.prototype, "errors", void 0);
exports.CreateManufacturerErrorResponseDto = CreateManufacturerErrorResponseDto;
class ManufacturerDataDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", manufacturer_dto_1.ManufacturerDto)
], ManufacturerDataDto.prototype, "manufacturer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "MANUFACTURER_CREATED_SUCCESSFULLY",
    }),
    __metadata("design:type", Object)
], ManufacturerDataDto.prototype, "message", void 0);
class CreateManufacturerSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    __metadata("design:type", Number)
], CreateManufacturerSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", ManufacturerDataDto)
], CreateManufacturerSuccessResponseDto.prototype, "data", void 0);
exports.CreateManufacturerSuccessResponseDto = CreateManufacturerSuccessResponseDto;
//# sourceMappingURL=createManufacturer.dto.js.map