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
exports.getCategoryListErrorResponseDto = exports.getCategoryListSuccessResponseDto = exports.CategoryListDto = exports.NestedCategoryListDto = exports.subCategoryListDto = exports.AncestorDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const category_dto_1 = require("./category.dto");
class AncestorDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AncestorDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AncestorDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AncestorDto.prototype, "level", void 0);
exports.AncestorDto = AncestorDto;
class subCategoryListDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], subCategoryListDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], subCategoryListDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: category_dto_1.PhotoDto }),
    (0, class_transformer_1.Type)(() => category_dto_1.PhotoDto),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", category_dto_1.PhotoDto)
], subCategoryListDto.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], subCategoryListDto.prototype, "published", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], subCategoryListDto.prototype, "displayOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], subCategoryListDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [AncestorDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], subCategoryListDto.prototype, "ancestors", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Object] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], subCategoryListDto.prototype, "subCategories", void 0);
exports.subCategoryListDto = subCategoryListDto;
class NestedCategoryListDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NestedCategoryListDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NestedCategoryListDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: category_dto_1.PhotoDto }),
    (0, class_transformer_1.Type)(() => category_dto_1.PhotoDto),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", category_dto_1.PhotoDto)
], NestedCategoryListDto.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], NestedCategoryListDto.prototype, "published", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], NestedCategoryListDto.prototype, "displayOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NestedCategoryListDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [AncestorDto] }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], NestedCategoryListDto.prototype, "ancestors", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [subCategoryListDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => subCategoryListDto),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], NestedCategoryListDto.prototype, "subCategories", void 0);
exports.NestedCategoryListDto = NestedCategoryListDto;
class CategoryListDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: [NestedCategoryListDto] }),
    (0, class_transformer_1.Type)(() => NestedCategoryListDto),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CategoryListDto.prototype, "categories", void 0);
exports.CategoryListDto = CategoryListDto;
class getCategoryListSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], getCategoryListSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: CategoryListDto }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", CategoryListDto)
], getCategoryListSuccessResponseDto.prototype, "data", void 0);
exports.getCategoryListSuccessResponseDto = getCategoryListSuccessResponseDto;
class getCategoryListErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        default: common_1.HttpStatus.BAD_REQUEST,
    }),
    __metadata("design:type", Number)
], getCategoryListErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CAN_NOT_GET_CATEGORY_LIST",
        examples: ["CAN_NOT_GET_CATEGORY_LIST"],
    }),
    __metadata("design:type", String)
], getCategoryListErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], getCategoryListErrorResponseDto.prototype, "errors", void 0);
exports.getCategoryListErrorResponseDto = getCategoryListErrorResponseDto;
//# sourceMappingURL=getCategoryList.dto.js.map