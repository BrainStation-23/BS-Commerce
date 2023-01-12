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
exports.GetManufacturersSuccessResponseDto = exports.GetManufacturersErrorResponseDto = exports.GetManufacturersQueryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const manufacturer_dto_1 = require("./manufacturer.dto");
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
class GetManufacturersQueryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Number }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], GetManufacturersQueryDto.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Number }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], GetManufacturersQueryDto.prototype, "limit", void 0);
exports.GetManufacturersQueryDto = GetManufacturersQueryDto;
class GetManufacturersErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    __metadata("design:type", Number)
], GetManufacturersErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "MANUFACTURERS_NOT_FOUND",
        examples: ["MANUFACTURERS_NOT_FOUND"],
    }),
    __metadata("design:type", String)
], GetManufacturersErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], GetManufacturersErrorResponseDto.prototype, "errors", void 0);
exports.GetManufacturersErrorResponseDto = GetManufacturersErrorResponseDto;
class ManufacturersDataDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: [manufacturer_dto_1.ManufacturerDto] }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", Array)
], ManufacturersDataDto.prototype, "manufacturers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", Number)
], ManufacturersDataDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "MANUFACTURERS_LOADED_SUCCESSFULLY",
    }),
    __metadata("design:type", String)
], ManufacturersDataDto.prototype, "message", void 0);
class GetManufacturersSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    __metadata("design:type", Number)
], GetManufacturersSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", ManufacturersDataDto)
], GetManufacturersSuccessResponseDto.prototype, "data", void 0);
exports.GetManufacturersSuccessResponseDto = GetManufacturersSuccessResponseDto;
//# sourceMappingURL=getManufacturers.dto.js.map