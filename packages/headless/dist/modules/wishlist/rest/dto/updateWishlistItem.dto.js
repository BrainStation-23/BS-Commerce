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
exports.updateWishlistItemErrorResponseDto = exports.updateWishlistItemSuccessResponseDto = exports.updateWishlistItemRequestBodyDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const wishlist_dto_1 = require("./wishlist.dto");
class updateWishlistItemRequestBodyDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '6e9fb5dc-a3ad-4d35-81d2-16fc6e2dc54e' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], updateWishlistItemRequestBodyDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => Number }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], updateWishlistItemRequestBodyDto.prototype, "quantity", void 0);
exports.updateWishlistItemRequestBodyDto = updateWishlistItemRequestBodyDto;
class updateWishlistItemSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    __metadata("design:type", Number)
], updateWishlistItemSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: wishlist_dto_1.WishlistDto }),
    __metadata("design:type", wishlist_dto_1.WishlistDto)
], updateWishlistItemSuccessResponseDto.prototype, "data", void 0);
exports.updateWishlistItemSuccessResponseDto = updateWishlistItemSuccessResponseDto;
class updateWishlistItemErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    __metadata("design:type", Number)
], updateWishlistItemErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CAN_NOT_UPDATE_WISHLIST_ITEM",
        examples: [
            "CAN_NOT_DELETE_WISHLIST_ITEM",
            "CAN_NOT_UPDATE_WISHLIST_ITEM",
        ],
    }),
    __metadata("design:type", String)
], updateWishlistItemErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], updateWishlistItemErrorResponseDto.prototype, "errors", void 0);
exports.updateWishlistItemErrorResponseDto = updateWishlistItemErrorResponseDto;
//# sourceMappingURL=updateWishlistItem.dto.js.map