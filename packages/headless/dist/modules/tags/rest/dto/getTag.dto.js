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
exports.GetTagSuccessResponseDto = exports.GetTagErrorResponseDto = exports.GetTagParamsDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const tags_dto_1 = require("./tags.dto");
class GetTagParamsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetTagParamsDto.prototype, "tagId", void 0);
exports.GetTagParamsDto = GetTagParamsDto;
class GetTagErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetTagErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "CAN_NOT_GET_TAG" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetTagErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], GetTagErrorResponseDto.prototype, "errors", void 0);
exports.GetTagErrorResponseDto = GetTagErrorResponseDto;
class GetTagSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetTagSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => tags_dto_1.TagDto }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", tags_dto_1.TagDto)
], GetTagSuccessResponseDto.prototype, "data", void 0);
exports.GetTagSuccessResponseDto = GetTagSuccessResponseDto;
//# sourceMappingURL=getTag.dto.js.map