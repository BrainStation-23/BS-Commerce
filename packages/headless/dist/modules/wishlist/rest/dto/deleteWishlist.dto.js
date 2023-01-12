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
exports.deleteWishlistErrorResponseDto = exports.deleteWishlistSuccessResponseDto = exports.deleteWishlistPramsDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class deleteWishlistPramsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], deleteWishlistPramsDto.prototype, "wishlistId", void 0);
exports.deleteWishlistPramsDto = deleteWishlistPramsDto;
class SuccessMessage {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "WISHLIST_DELETED_SUCCESSFUL",
    }),
    __metadata("design:type", String)
], SuccessMessage.prototype, "message", void 0);
class deleteWishlistSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    __metadata("design:type", Number)
], deleteWishlistSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", SuccessMessage)
], deleteWishlistSuccessResponseDto.prototype, "data", void 0);
exports.deleteWishlistSuccessResponseDto = deleteWishlistSuccessResponseDto;
class deleteWishlistErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    __metadata("design:type", Number)
], deleteWishlistErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "CAN_NOT_DELETE_WISHLIST" }),
    __metadata("design:type", String)
], deleteWishlistErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], deleteWishlistErrorResponseDto.prototype, "errors", void 0);
exports.deleteWishlistErrorResponseDto = deleteWishlistErrorResponseDto;
//# sourceMappingURL=deleteWishlist.dto.js.map