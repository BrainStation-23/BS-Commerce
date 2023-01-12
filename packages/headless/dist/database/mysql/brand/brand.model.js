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
const crypto_1 = require("crypto");
const sequelize_typescript_1 = require("sequelize-typescript");
const info_model_1 = require("./info.model");
const meta_model_1 = require("./meta.model");
let BrandModel = class BrandModel extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        defaultValue: () => (0, crypto_1.randomUUID)(),
    }),
    __metadata("design:type", String)
], BrandModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => info_model_1.default),
    __metadata("design:type", info_model_1.default)
], BrandModel.prototype, "info", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => meta_model_1.default),
    __metadata("design:type", meta_model_1.default)
], BrandModel.prototype, "meta", void 0);
BrandModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'Brands',
    })
], BrandModel);
exports.default = BrandModel;
//# sourceMappingURL=brand.model.js.map