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
const address_model_1 = require("./address.model");
let UserModel = class UserModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Unique)(true),
    (0, sequelize_typescript_1.Default)(() => (0, crypto_1.randomUUID)()),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserModel.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserModel.prototype, "firstName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserModel.prototype, "lastName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserModel.prototype, "displayName", void 0);
__decorate([
    (0, sequelize_typescript_1.Unique)(true),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserModel.prototype, "username", void 0);
__decorate([
    sequelize_typescript_1.Column,
    sequelize_typescript_1.Index,
    __metadata("design:type", String)
], UserModel.prototype, "phone", void 0);
__decorate([
    sequelize_typescript_1.Column,
    sequelize_typescript_1.Index,
    __metadata("design:type", String)
], UserModel.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserModel.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserModel.prototype, "provider", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserModel.prototype, "resetPasswordToken", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], UserModel.prototype, "resetPasswordExpires", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserModel.prototype, "gender", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => address_model_1.default),
    __metadata("design:type", Array)
], UserModel.prototype, "addresses", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserModel.prototype, "status", void 0);
UserModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'Users',
    })
], UserModel);
exports.default = UserModel;
//# sourceMappingURL=user.model.js.map