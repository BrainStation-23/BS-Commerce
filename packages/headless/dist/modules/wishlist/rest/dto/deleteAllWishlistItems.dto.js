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
exports.deleteAllWishlistItemsErrorResponseDto = exports.deleteAllWishlistItemsSuccessResponseDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
class DeleteAllWishlistItemsSuccessMessage {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "WISHLIST_ITEMS_DELETED_SUCCESSFUL",
    }),
    __metadata("design:type", String)
], DeleteAllWishlistItemsSuccessMessage.prototype, "message", void 0);
class deleteAllWishlistItemsSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    __metadata("design:type", Number)
], deleteAllWishlistItemsSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", DeleteAllWishlistItemsSuccessMessage)
], deleteAllWishlistItemsSuccessResponseDto.prototype, "data", void 0);
exports.deleteAllWishlistItemsSuccessResponseDto = deleteAllWishlistItemsSuccessResponseDto;
class deleteAllWishlistItemsErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    __metadata("design:type", Number)
], deleteAllWishlistItemsErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CAN_NOT_DELETE_ALL_WISHLIST_ITEMS",
    }),
    __metadata("design:type", String)
], deleteAllWishlistItemsErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], deleteAllWishlistItemsErrorResponseDto.prototype, "errors", void 0);
exports.deleteAllWishlistItemsErrorResponseDto = deleteAllWishlistItemsErrorResponseDto;
//# sourceMappingURL=deleteAllWishlistItems.dto.js.map