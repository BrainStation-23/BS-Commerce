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
exports.getCategoryErrorResponseDto = exports.getCategorySuccessResponseDto = exports.getCategoryRequestDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const service_validator_1 = require("../../../../decorators/service.validator");
const category_dto_1 = require("./category.dto");
class getCategoryRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], getCategoryRequestDto.prototype, "categoryId", void 0);
exports.getCategoryRequestDto = getCategoryRequestDto;
class getCategorySuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], getCategorySuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: category_dto_1.CategoryDto }),
    (0, service_validator_1.ValidateNested)(category_dto_1.CategoryDto),
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", category_dto_1.CategoryDto)
], getCategorySuccessResponseDto.prototype, "data", void 0);
exports.getCategorySuccessResponseDto = getCategorySuccessResponseDto;
class getCategoryErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        default: common_1.HttpStatus.BAD_REQUEST,
    }),
    __metadata("design:type", Number)
], getCategoryErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CAN_NOT_GET_CATEGORY_BY_ID",
        examples: ["CAN_NOT_GET_CATEGORY_BY_ID"],
    }),
    __metadata("design:type", String)
], getCategoryErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], getCategoryErrorResponseDto.prototype, "errors", void 0);
exports.getCategoryErrorResponseDto = getCategoryErrorResponseDto;
//# sourceMappingURL=getCategory.dto.js.map