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
exports.CustomerLogoutSuccessResponseDto = exports.LogoutSuccessResponseMessage = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
class LogoutSuccessResponseMessage {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LogoutSuccessResponseMessage.prototype, "message", void 0);
exports.LogoutSuccessResponseMessage = LogoutSuccessResponseMessage;
class CustomerLogoutSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: common_1.HttpStatus.OK }),
    __metadata("design:type", Number)
], CustomerLogoutSuccessResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", LogoutSuccessResponseMessage)
], CustomerLogoutSuccessResponseDto.prototype, "data", void 0);
exports.CustomerLogoutSuccessResponseDto = CustomerLogoutSuccessResponseDto;
//# sourceMappingURL=logout.dto.js.map