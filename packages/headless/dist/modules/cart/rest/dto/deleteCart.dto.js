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
exports.deleteCartErrorResponseDto = exports.deleteCartSuccessResponseDto = exports.DeleteMessageDto = exports.deleteCartRequestDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class deleteCartRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], deleteCartRequestDto.prototype, "cartId", void 0);
exports.deleteCartRequestDto = deleteCartRequestDto;
class DeleteMessageDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "REMOVE_CART_SUCCESSFULLY",
    }),
    __metadata("design:type", String)
], DeleteMessageDto.prototype, "message", void 0);
exports.DeleteMessageDto = DeleteMessageDto;
class deleteCartSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], deleteCartSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: DeleteMessageDto }),
    (0, class_transformer_1.Type)(() => DeleteMessageDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", DeleteMessageDto)
], deleteCartSuccessResponseDto.prototype, "data", void 0);
exports.deleteCartSuccessResponseDto = deleteCartSuccessResponseDto;
class deleteCartErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        default: common_1.HttpStatus.BAD_REQUEST,
    }),
    __metadata("design:type", Number)
], deleteCartErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CAN_NOT_REMOVE_CART",
    }),
    __metadata("design:type", String)
], deleteCartErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], deleteCartErrorResponseDto.prototype, "errors", void 0);
exports.deleteCartErrorResponseDto = deleteCartErrorResponseDto;
//# sourceMappingURL=deleteCart.dto.js.map