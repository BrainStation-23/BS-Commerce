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
exports.AdminSignInResponse = exports.AdminSignUpResponse = exports.AdminSignUpResponseMessage = exports.AdminSignInResponseToken = exports.AdminSignInInput = exports.AdminSignUpInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let AdminSignUpInput = class AdminSignUpInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], AdminSignUpInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], AdminSignUpInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], AdminSignUpInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.MinLength)(6, {
        message: 'Password is too short. Minimal length is $constraint1 characters',
    }),
    __metadata("design:type", String)
], AdminSignUpInput.prototype, "password", void 0);
AdminSignUpInput = __decorate([
    (0, graphql_1.InputType)()
], AdminSignUpInput);
exports.AdminSignUpInput = AdminSignUpInput;
let AdminSignInInput = class AdminSignInInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], AdminSignInInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.MinLength)(6, {
        message: "INVALID_CREDENTIALS",
    }),
    __metadata("design:type", String)
], AdminSignInInput.prototype, "password", void 0);
AdminSignInInput = __decorate([
    (0, graphql_1.InputType)()
], AdminSignInInput);
exports.AdminSignInInput = AdminSignInInput;
let AdminSignInResponseToken = class AdminSignInResponseToken {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], AdminSignInResponseToken.prototype, "token", void 0);
AdminSignInResponseToken = __decorate([
    (0, graphql_1.ObjectType)()
], AdminSignInResponseToken);
exports.AdminSignInResponseToken = AdminSignInResponseToken;
let AdminSignUpResponseMessage = class AdminSignUpResponseMessage {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], AdminSignUpResponseMessage.prototype, "message", void 0);
AdminSignUpResponseMessage = __decorate([
    (0, graphql_1.ObjectType)()
], AdminSignUpResponseMessage);
exports.AdminSignUpResponseMessage = AdminSignUpResponseMessage;
let AdminSignUpResponse = class AdminSignUpResponse {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], AdminSignUpResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", AdminSignUpResponseMessage)
], AdminSignUpResponse.prototype, "data", void 0);
AdminSignUpResponse = __decorate([
    (0, graphql_1.ObjectType)()
], AdminSignUpResponse);
exports.AdminSignUpResponse = AdminSignUpResponse;
let AdminSignInResponse = class AdminSignInResponse {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], AdminSignInResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", AdminSignInResponseToken)
], AdminSignInResponse.prototype, "data", void 0);
AdminSignInResponse = __decorate([
    (0, graphql_1.ObjectType)()
], AdminSignInResponse);
exports.AdminSignInResponse = AdminSignInResponse;
//# sourceMappingURL=auth.model.js.map