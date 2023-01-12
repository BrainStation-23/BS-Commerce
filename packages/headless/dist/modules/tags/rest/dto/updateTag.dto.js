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
exports.UpdateTagErrorResponseDto = exports.UpdateTagSuccessResponseDto = exports.UpdateTagRequestDto = exports.UpdateTagParamDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const tags_dto_1 = require("./tags.dto");
class UpdateTagParamDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTagParamDto.prototype, "tagId", void 0);
exports.UpdateTagParamDto = UpdateTagParamDto;
class UpdateTagRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTagRequestDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateTagRequestDto.prototype, "isHomePageProductsTag", void 0);
exports.UpdateTagRequestDto = UpdateTagRequestDto;
class UpdateTagSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateTagSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => tags_dto_1.TagDto }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", tags_dto_1.TagDto)
], UpdateTagSuccessResponseDto.prototype, "data", void 0);
exports.UpdateTagSuccessResponseDto = UpdateTagSuccessResponseDto;
class UpdateTagErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateTagErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CAN_NOT_UPDATE_TAG",
        examples: [
            "CAN_NOT_UPDATE_TAG",
            "TAG_NAME_EXISTS",
        ],
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTagErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UpdateTagErrorResponseDto.prototype, "errors", void 0);
exports.UpdateTagErrorResponseDto = UpdateTagErrorResponseDto;
//# sourceMappingURL=updateTag.dto.js.map