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
const seo_model_1 = require("./seo.model");
let ManufacturerModel = class ManufacturerModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Unique)(true),
    (0, sequelize_typescript_1.Default)(() => (0, crypto_1.randomUUID)()),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ManufacturerModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Unique)(true),
    sequelize_typescript_1.Column,
    sequelize_typescript_1.Index,
    __metadata("design:type", String)
], ManufacturerModel.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ManufacturerModel.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ManufacturerModel.prototype, "picture", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], ManufacturerModel.prototype, "isPublished", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ManufacturerModel.prototype, "displayOrder", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => seo_model_1.default),
    __metadata("design:type", seo_model_1.default)
], ManufacturerModel.prototype, "seo", void 0);
ManufacturerModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'Manufacturers',
    })
], ManufacturerModel);
exports.default = ManufacturerModel;
//# sourceMappingURL=manufacturer.model.js.map