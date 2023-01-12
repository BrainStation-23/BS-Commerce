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
exports.deleteAllCartItemsErrorResponseDto = exports.deleteAllCartItemsSuccessResponseDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class deleteAllCartItemsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], deleteAllCartItemsDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], deleteAllCartItemsDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], deleteAllCartItemsDto.prototype, "items", void 0);
class deleteAllCartItemsSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], deleteAllCartItemsSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", deleteAllCartItemsDto)
], deleteAllCartItemsSuccessResponseDto.prototype, "data", void 0);
exports.deleteAllCartItemsSuccessResponseDto = deleteAllCartItemsSuccessResponseDto;
class deleteAllCartItemsErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        default: common_1.HttpStatus.BAD_REQUEST,
    }),
    __metadata("design:type", Number)
], deleteAllCartItemsErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CAN_NOT_REMOVE_ALL_CART_ITEMS",
    }),
    __metadata("design:type", String)
], deleteAllCartItemsErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], deleteAllCartItemsErrorResponseDto.prototype, "errors", void 0);
exports.deleteAllCartItemsErrorResponseDto = deleteAllCartItemsErrorResponseDto;
//# sourceMappingURL=deleteAllCartItems.dto.js.map