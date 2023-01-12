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
exports.ChangePasswordResponse = exports.ChangePasswordResponseMessage = exports.AdminResponse = exports.ChangePasswordInput = exports.UpdateUserInput = exports.Admin = exports.AdminAddress = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const phone_1 = require("../../../config/phone");
let AdminAddress = class AdminAddress {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AdminAddress.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], AdminAddress.prototype, "addressLine1", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AdminAddress.prototype, "addressLine2", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], AdminAddress.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], AdminAddress.prototype, "country", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], AdminAddress.prototype, "postCode", void 0);
AdminAddress = __decorate([
    (0, graphql_1.ObjectType)('AdminAddress'),
    (0, graphql_1.InputType)('AdminAddressInput')
], AdminAddress);
exports.AdminAddress = AdminAddress;
let Admin = class Admin {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Admin.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Admin.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Admin.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Admin.prototype, "displayName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Admin.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Admin.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Admin.prototype, "provider", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Admin.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Admin.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AdminAddress], { nullable: true }),
    __metadata("design:type", Array)
], Admin.prototype, "addresses", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Admin.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Admin.prototype, "active", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Admin.prototype, "resetPasswordToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Admin.prototype, "resetPasswordExpires", void 0);
Admin = __decorate([
    (0, graphql_1.ObjectType)()
], Admin);
exports.Admin = Admin;
let UpdateUserInput = class UpdateUserInput {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "provider", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPhoneNumber)(phone_1.regexConfig.phone, {
        message: 'Please Enter the Valid Phone Number!',
    }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => AdminAddress, { nullable: true }),
    __metadata("design:type", AdminAddress)
], UpdateUserInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], UpdateUserInput.prototype, "active", void 0);
UpdateUserInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateUserInput);
exports.UpdateUserInput = UpdateUserInput;
let ChangePasswordInput = class ChangePasswordInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ChangePasswordInput.prototype, "currentPassword", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ChangePasswordInput.prototype, "newPassword", void 0);
ChangePasswordInput = __decorate([
    (0, graphql_1.InputType)()
], ChangePasswordInput);
exports.ChangePasswordInput = ChangePasswordInput;
let AdminResponse = class AdminResponse {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], AdminResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => Admin, { nullable: true }),
    __metadata("design:type", Admin)
], AdminResponse.prototype, "data", void 0);
AdminResponse = __decorate([
    (0, graphql_1.ObjectType)()
], AdminResponse);
exports.AdminResponse = AdminResponse;
let ChangePasswordResponseMessage = class ChangePasswordResponseMessage {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ChangePasswordResponseMessage.prototype, "message", void 0);
ChangePasswordResponseMessage = __decorate([
    (0, graphql_1.ObjectType)()
], ChangePasswordResponseMessage);
exports.ChangePasswordResponseMessage = ChangePasswordResponseMessage;
let ChangePasswordResponse = class ChangePasswordResponse {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ChangePasswordResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => ChangePasswordResponseMessage, { nullable: true }),
    __metadata("design:type", ChangePasswordResponseMessage)
], ChangePasswordResponse.prototype, "data", void 0);
ChangePasswordResponse = __decorate([
    (0, graphql_1.ObjectType)()
], ChangePasswordResponse);
exports.ChangePasswordResponse = ChangePasswordResponse;
//# sourceMappingURL=user.model.js.map