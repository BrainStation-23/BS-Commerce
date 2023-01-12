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
exports.CustomerInformationDto = exports.CustomerAddressDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CustomerAddressDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerAddressDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerAddressDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerAddressDto.prototype, "addressLine1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerAddressDto.prototype, "addressLine2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CustomerAddressDto.prototype, "isDefault", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerAddressDto.prototype, "company", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerAddressDto.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerAddressDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerAddressDto.prototype, "postCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerAddressDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'HOME',
        examples: ['HOME', 'OFFICE', 'OTHERS'],
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CustomerAddressDto.prototype, "tag", void 0);
exports.CustomerAddressDto = CustomerAddressDto;
class CustomerInformationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CustomerInformationDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CustomerInformationDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CustomerInformationDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CustomerInformationDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [CustomerAddressDto],
    }),
    __metadata("design:type", Array)
], CustomerInformationDto.prototype, "addresses", void 0);
exports.CustomerInformationDto = CustomerInformationDto;
//# sourceMappingURL=customer.dto.js.map