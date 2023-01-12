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
exports.CustomerForgotPasswordSuccessResponseDto = exports.CustomerForgotPasswordErrorResponseDto = exports.CustomerForgotPasswordSuccessMessage = exports.CustomerForgotPasswordDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CustomerForgotPasswordDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerForgotPasswordDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CustomerForgotPasswordDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6, {
        message: 'Password is too short. Minimal length is $constraint1 characters',
    }),
    __metadata("design:type", String)
], CustomerForgotPasswordDto.prototype, "password", void 0);
exports.CustomerForgotPasswordDto = CustomerForgotPasswordDto;
class CustomerForgotPasswordSuccessMessage {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerForgotPasswordSuccessMessage.prototype, "message", void 0);
exports.CustomerForgotPasswordSuccessMessage = CustomerForgotPasswordSuccessMessage;
class CustomerForgotPasswordErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CustomerForgotPasswordErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CAN_NOT_UPDATE_CUSTOMER_PASSWORD",
        examples: [
            "CAN_NOT_GET_CUSTOMER",
            "CAN_NOT_UPDATE_CUSTOMER_PASSWORD",
        ],
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerForgotPasswordErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CustomerForgotPasswordErrorResponseDto.prototype, "errors", void 0);
exports.CustomerForgotPasswordErrorResponseDto = CustomerForgotPasswordErrorResponseDto;
class CustomerForgotPasswordSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CustomerForgotPasswordSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", CustomerForgotPasswordSuccessMessage)
], CustomerForgotPasswordSuccessResponseDto.prototype, "data", void 0);
exports.CustomerForgotPasswordSuccessResponseDto = CustomerForgotPasswordSuccessResponseDto;
//# sourceMappingURL=forgotPassword.dto.js.map