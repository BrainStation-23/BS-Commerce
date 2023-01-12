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
exports.WishlistDto = exports.WishlistItemDto = exports.WishlistProductDto = exports.WishlistProductMetaDto = exports.WishlistProductPhotoDto = exports.WishlistProductInfoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class WishlistProductInfoDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WishlistProductInfoDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WishlistProductInfoDto.prototype, "shortDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WishlistProductInfoDto.prototype, "fullDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WishlistProductInfoDto.prototype, "sku", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], WishlistProductInfoDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], WishlistProductInfoDto.prototype, "oldPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], WishlistProductInfoDto.prototype, "cost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], WishlistProductInfoDto.prototype, "showOnHomePage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], WishlistProductInfoDto.prototype, "includeInTopMenu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], WishlistProductInfoDto.prototype, "allowToSelectPageSize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], WishlistProductInfoDto.prototype, "published", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], WishlistProductInfoDto.prototype, "displayOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], WishlistProductInfoDto.prototype, "isFeatured", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], WishlistProductInfoDto.prototype, "publishDate", void 0);
exports.WishlistProductInfoDto = WishlistProductInfoDto;
class WishlistProductPhotoDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WishlistProductPhotoDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WishlistProductPhotoDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WishlistProductPhotoDto.prototype, "alt", void 0);
exports.WishlistProductPhotoDto = WishlistProductPhotoDto;
class WishlistProductMetaDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WishlistProductMetaDto.prototype, "friendlyPageName", void 0);
exports.WishlistProductMetaDto = WishlistProductMetaDto;
class WishlistProductDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WishlistProductDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: WishlistProductInfoDto }),
    (0, class_transformer_1.Type)(() => WishlistProductInfoDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", WishlistProductInfoDto)
], WishlistProductDto.prototype, "info", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: WishlistProductMetaDto }),
    (0, class_transformer_1.Type)(() => WishlistProductMetaDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", WishlistProductMetaDto)
], WishlistProductDto.prototype, "meta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: WishlistProductPhotoDto }),
    (0, class_transformer_1.Type)(() => WishlistProductPhotoDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Array)
], WishlistProductDto.prototype, "photos", void 0);
exports.WishlistProductDto = WishlistProductDto;
class WishlistItemDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: WishlistProductDto, required: false }),
    (0, class_transformer_1.Type)(() => WishlistProductDto),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", WishlistProductDto)
], WishlistItemDto.prototype, "product", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WishlistItemDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], WishlistItemDto.prototype, "quantity", void 0);
exports.WishlistItemDto = WishlistItemDto;
class WishlistDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], WishlistDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], WishlistDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [WishlistItemDto] }),
    (0, class_transformer_1.Type)(() => WishlistItemDto),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], WishlistDto.prototype, "items", void 0);
exports.WishlistDto = WishlistDto;
//# sourceMappingURL=wishlist.dto.js.map