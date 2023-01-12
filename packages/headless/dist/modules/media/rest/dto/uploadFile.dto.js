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
exports.UploadFileSuccessResponseDto = exports.UploadFileDto = exports.UploadFileErrorResponseDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UploadFileErrorResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.BAD_REQUEST }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UploadFileErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CAN_NOT_UPLOAD_FILE",
    }),
    __metadata("design:type", String)
], UploadFileErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UploadFileErrorResponseDto.prototype, "errors", void 0);
exports.UploadFileErrorResponseDto = UploadFileErrorResponseDto;
class UploadFileDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UploadFileDto.prototype, "url", void 0);
exports.UploadFileDto = UploadFileDto;
class UploadFileSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UploadFileSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", UploadFileDto)
], UploadFileSuccessResponseDto.prototype, "data", void 0);
exports.UploadFileSuccessResponseDto = UploadFileSuccessResponseDto;
//# sourceMappingURL=uploadFile.dto.js.map