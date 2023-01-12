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
exports.GetProductCountSuccessResponseDto = exports.Count = exports.GetProductCountErrorResponseDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class GetProductCountErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetProductCountErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CAN_NOT_GET_PRODUCT_COUNT",
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetProductCountErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], GetProductCountErrorResponseDto.prototype, "errors", void 0);
exports.GetProductCountErrorResponseDto = GetProductCountErrorResponseDto;
class Count {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Count.prototype, "count", void 0);
exports.Count = Count;
class GetProductCountSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetProductCountSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Count)
], GetProductCountSuccessResponseDto.prototype, "data", void 0);
exports.GetProductCountSuccessResponseDto = GetProductCountSuccessResponseDto;
//# sourceMappingURL=getProductCount.dto.js.map