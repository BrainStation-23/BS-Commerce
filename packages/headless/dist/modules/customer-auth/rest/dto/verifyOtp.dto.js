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
exports.VerifyOtpSuccessResponseDto = exports.VerifyOtpMessage = exports.VerifyOtpErrorResponseDto = exports.VerifyOtpDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class VerifyOtpDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerifyOtpDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], VerifyOtpDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '123456' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(100000, { message: 'OTP must have 6 digits' }),
    (0, class_validator_1.Max)(999999, { message: 'OTP must have 6 digits' }),
    __metadata("design:type", Number)
], VerifyOtpDto.prototype, "otp", void 0);
exports.VerifyOtpDto = VerifyOtpDto;
class VerifyOtpErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], VerifyOtpErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "OTP_EXPIRED_OR_INVALID_OTP",
        examples: [
            "OTP_EXPIRED_OR_INVALID_OTP",
            "CUSTOMER_EMAIL_ALREADY_EXITS",
            "CUSTOMER_PHONE_ALREADY_EXITS",
        ],
    }),
    __metadata("design:type", String)
], VerifyOtpErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], VerifyOtpErrorResponseDto.prototype, "errors", void 0);
exports.VerifyOtpErrorResponseDto = VerifyOtpErrorResponseDto;
class VerifyOtpMessage {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "OTP_VERIFIED_SUCCESSFUL" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerifyOtpMessage.prototype, "message", void 0);
exports.VerifyOtpMessage = VerifyOtpMessage;
class VerifyOtpSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], VerifyOtpSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", VerifyOtpMessage)
], VerifyOtpSuccessResponseDto.prototype, "data", void 0);
exports.VerifyOtpSuccessResponseDto = VerifyOtpSuccessResponseDto;
//# sourceMappingURL=verifyOtp.dto.js.map