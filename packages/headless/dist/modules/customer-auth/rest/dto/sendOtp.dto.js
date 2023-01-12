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
exports.SendOtpSuccessResponseDto = exports.SendOtpMessage = exports.SendOtpErrorResponseDto = exports.SendOtpDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class SendOtpDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendOtpDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SendOtpDto.prototype, "email", void 0);
exports.SendOtpDto = SendOtpDto;
class SendOtpErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SendOtpErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CAN_NOT_SEND_OTP",
        examples: [
            "CUSTOMER_EMAIL_ALREADY_EXITS",
            "CUSTOMER_PHONE_ALREADY_EXITS",
            ,
            "CAN_NOT_SEND_OTP",
        ],
    }),
    __metadata("design:type", String)
], SendOtpErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], SendOtpErrorResponseDto.prototype, "errors", void 0);
exports.SendOtpErrorResponseDto = SendOtpErrorResponseDto;
class SendOtpMessage {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "OTP_SEND_SUCCESSFUL" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendOtpMessage.prototype, "message", void 0);
exports.SendOtpMessage = SendOtpMessage;
class SendOtpSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SendOtpSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", SendOtpMessage)
], SendOtpSuccessResponseDto.prototype, "data", void 0);
exports.SendOtpSuccessResponseDto = SendOtpSuccessResponseDto;
//# sourceMappingURL=sendOtp.dto.js.map