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
const sequelize_typescript_2 = require("sequelize-typescript");
const sequelize_typescript_3 = require("sequelize-typescript");
const sequelize_typescript_4 = require("sequelize-typescript");
const user_model_1 = require("./user.model");
let AddressModel = class AddressModel extends sequelize_typescript_4.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_2.Unique)(true),
    (0, sequelize_typescript_3.Default)(() => (0, crypto_1.randomUUID)()),
    sequelize_typescript_4.Column,
    __metadata("design:type", String)
], AddressModel.prototype, "id", void 0);
__decorate([
    sequelize_typescript_4.Column,
    __metadata("design:type", String)
], AddressModel.prototype, "addressLine1", void 0);
__decorate([
    sequelize_typescript_4.Column,
    __metadata("design:type", String)
], AddressModel.prototype, "addressLine2", void 0);
__decorate([
    sequelize_typescript_4.Column,
    __metadata("design:type", String)
], AddressModel.prototype, "city", void 0);
__decorate([
    sequelize_typescript_4.Column,
    __metadata("design:type", String)
], AddressModel.prototype, "country", void 0);
__decorate([
    sequelize_typescript_4.Column,
    __metadata("design:type", String)
], AddressModel.prototype, "postCode", void 0);
__decorate([
    (0, sequelize_typescript_4.ForeignKey)(() => user_model_1.default),
    __metadata("design:type", Number)
], AddressModel.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_4.BelongsTo)(() => user_model_1.default),
    __metadata("design:type", user_model_1.default)
], AddressModel.prototype, "user", void 0);
AddressModel = __decorate([
    (0, sequelize_typescript_4.Table)({
        tableName: 'Address',
    })
], AddressModel);
exports.default = AddressModel;
//# sourceMappingURL=address.model.js.map