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
exports.CreateCustomerSuccessResponseDto = exports.CreateCustomerMessage = exports.CreateCustomerErrorResponseDto = exports.CreateCustomerDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCustomerDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 123456 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCustomerDto.prototype, "otp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6, {
        message: 'Password is too short. Minimal length is $constraint1 characters',
    }),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "password", void 0);
exports.CreateCustomerDto = CreateCustomerDto;
class CreateCustomerErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCustomerErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CAN_NOT_CREATE_CUSTOMER",
        examples: [
            "CUSTOMER_EMAIL_ALREADY_EXITS",
            "CUSTOMER_PHONE_ALREADY_EXITS",
            ,
            "CAN_NOT_CREATE_CUSTOMER",
        ],
    }),
    __metadata("design:type", String)
], CreateCustomerErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateCustomerErrorResponseDto.prototype, "errors", void 0);
exports.CreateCustomerErrorResponseDto = CreateCustomerErrorResponseDto;
class CreateCustomerMessage {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CUSTOMER_CREATED_SUCCESSFUL",
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerMessage.prototype, "message", void 0);
exports.CreateCustomerMessage = CreateCustomerMessage;
class CreateCustomerSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCustomerSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", CreateCustomerMessage)
], CreateCustomerSuccessResponseDto.prototype, "data", void 0);
exports.CreateCustomerSuccessResponseDto = CreateCustomerSuccessResponseDto;
//# sourceMappingURL=register.dto.js.map