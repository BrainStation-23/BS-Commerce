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
exports.BrandDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const infoDto_1 = require("./infoDto");
const metaDto_1 = require("./metaDto");
const service_validator_1 = require("../../../../decorators/service.validator");
class BrandDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BrandDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: infoDto_1.InfoDto }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, service_validator_1.ValidateNested)(infoDto_1.InfoDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", infoDto_1.InfoDto)
], BrandDto.prototype, "info", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: metaDto_1.MetaDto }),
    (0, service_validator_1.ValidateNested)(metaDto_1.MetaDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", metaDto_1.MetaDto)
], BrandDto.prototype, "meta", void 0);
exports.BrandDto = BrandDto;
//# sourceMappingURL=brandDto.js.map