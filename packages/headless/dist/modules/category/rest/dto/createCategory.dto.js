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
exports.createCategoryErrorResponseDto = exports.createCategorySuccessResponseDto = exports.createCategoryRequestDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const category_dto_1 = require("./category.dto");
const service_validator_1 = require("../../../../decorators/service.validator");
const class_transformer_1 = require("class-transformer");
class createCategoryRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], createCategoryRequestDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], createCategoryRequestDto.prototype, "parentSlug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: category_dto_1.PhotoDto }),
    (0, class_transformer_1.Type)(() => category_dto_1.PhotoDto),
    (0, service_validator_1.ValidateNested)(category_dto_1.PhotoDto),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", category_dto_1.PhotoDto)
], createCategoryRequestDto.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], createCategoryRequestDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], createCategoryRequestDto.prototype, "showOnHomePage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], createCategoryRequestDto.prototype, "includeInTopMenu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], createCategoryRequestDto.prototype, "allowToSelectPageSize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], createCategoryRequestDto.prototype, "published", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], createCategoryRequestDto.prototype, "displayOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: category_dto_1.CategoryMetaDto }),
    (0, class_transformer_1.Type)(() => category_dto_1.CategoryMetaDto),
    (0, service_validator_1.ValidateNested)(category_dto_1.CategoryMetaDto),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", category_dto_1.CategoryMetaDto)
], createCategoryRequestDto.prototype, "meta", void 0);
exports.createCategoryRequestDto = createCategoryRequestDto;
class createCategorySuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], createCategorySuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: category_dto_1.CategoryDto }),
    (0, class_transformer_1.Type)(() => category_dto_1.CategoryDto),
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", category_dto_1.CategoryDto)
], createCategorySuccessResponseDto.prototype, "data", void 0);
exports.createCategorySuccessResponseDto = createCategorySuccessResponseDto;
class createCategoryErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        default: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
    }),
    __metadata("design:type", Number)
], createCategoryErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CAN_NOT_CREATE_CATEGORY",
        examples: ["CAN_NOT_CREATE_CATEGORY"],
    }),
    __metadata("design:type", String)
], createCategoryErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], createCategoryErrorResponseDto.prototype, "errors", void 0);
exports.createCategoryErrorResponseDto = createCategoryErrorResponseDto;
//# sourceMappingURL=createCategory.dto.js.map