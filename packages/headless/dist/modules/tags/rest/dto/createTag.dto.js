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
exports.CreateTagSuccessResponseDto = exports.CreateTagErrorResponseDto = exports.CreateTagRequestBodyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const common_1 = require("@nestjs/common");
const tags_dto_1 = require("./tags.dto");
class CreateTagRequestBodyDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTagRequestBodyDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateTagRequestBodyDto.prototype, "isHomePageProductsTag", void 0);
exports.CreateTagRequestBodyDto = CreateTagRequestBodyDto;
class CreateTagErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTagErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CAN_NOT_CREATE_TAG",
        examples: [
            "TAG_NAME_EXISTS",
            "CAN_NOT_CREATE_TAG",
        ],
    }),
    __metadata("design:type", String)
], CreateTagErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], CreateTagErrorResponseDto.prototype, "errors", void 0);
exports.CreateTagErrorResponseDto = CreateTagErrorResponseDto;
class CreateTagSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    __metadata("design:type", Number)
], CreateTagSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: tags_dto_1.TagDto }),
    __metadata("design:type", tags_dto_1.TagDto)
], CreateTagSuccessResponseDto.prototype, "data", void 0);
exports.CreateTagSuccessResponseDto = CreateTagSuccessResponseDto;
//# sourceMappingURL=createTag.dto.js.map