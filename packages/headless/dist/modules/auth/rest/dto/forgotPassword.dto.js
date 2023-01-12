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
exports.ForgotPasswordSuccessResponseDto = exports.ForgotPasswordErrorResponseDto = exports.ChangePasswordMessageDto = exports.ForgotPasswordDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ForgotPasswordDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ForgotPasswordDto.prototype, "username", void 0);
exports.ForgotPasswordDto = ForgotPasswordDto;
class ChangePasswordMessageDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChangePasswordMessageDto.prototype, "message", void 0);
exports.ChangePasswordMessageDto = ChangePasswordMessageDto;
class ForgotPasswordErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ForgotPasswordErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CAN_NOT_UPDATE_USER_PASSWORD",
        examples: [
            "CAN_NOT_GET_USER",
            "CAN_NOT_UPDATE_USER_PASSWORD",
            "SIGNED_UP_USING_YOUR_LOCAL_ACCOUNT",
        ],
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ForgotPasswordErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ForgotPasswordErrorResponseDto.prototype, "errors", void 0);
exports.ForgotPasswordErrorResponseDto = ForgotPasswordErrorResponseDto;
class ForgotPasswordSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ForgotPasswordSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", ChangePasswordMessageDto)
], ForgotPasswordSuccessResponseDto.prototype, "data", void 0);
exports.ForgotPasswordSuccessResponseDto = ForgotPasswordSuccessResponseDto;
//# sourceMappingURL=forgotPassword.dto.js.map