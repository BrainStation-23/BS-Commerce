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
exports.GetManufacturerSuccessResponseDto = exports.GetManufacturerErrorResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const manufacturer_dto_1 = require("./manufacturer.dto");
const common_1 = require("@nestjs/common");
class GetManufacturerErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    __metadata("design:type", Number)
], GetManufacturerErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "MANUFACTURER_NOT_FOUND",
        examples: ["MANUFACTURER_NOT_FOUND"],
    }),
    __metadata("design:type", String)
], GetManufacturerErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], GetManufacturerErrorResponseDto.prototype, "errors", void 0);
exports.GetManufacturerErrorResponseDto = GetManufacturerErrorResponseDto;
class ManufacturerDataDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", manufacturer_dto_1.ManufacturerDto)
], ManufacturerDataDto.prototype, "manufacturer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "MANUFACTURER_LOADED_SUCCESSFULLY",
    }),
    __metadata("design:type", Object)
], ManufacturerDataDto.prototype, "message", void 0);
class GetManufacturerSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    __metadata("design:type", Number)
], GetManufacturerSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", ManufacturerDataDto)
], GetManufacturerSuccessResponseDto.prototype, "data", void 0);
exports.GetManufacturerSuccessResponseDto = GetManufacturerSuccessResponseDto;
//# sourceMappingURL=getManufacturer.dto.js.map