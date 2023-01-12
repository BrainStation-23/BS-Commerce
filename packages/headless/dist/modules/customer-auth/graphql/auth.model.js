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
exports.GetCustomerAuthResponse = exports.GetAuthCustomerQuery = exports.SignInAuthResponse = exports.CustomerSignInResponseToken = exports.VerifyOtpAuthResponse = exports.SendOtpAuthResponse = exports.ForgotPasswordResponse = exports.RegistrationAuthResponse = exports.CustomerAuthResponseMessage = exports.CustomerForgotPasswordDataInput = exports.CustomerSignInDataInput = exports.CreateCustomerInput = exports.VerifyOtpInput = exports.SendOtpInput = exports.AuthCustomer = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let AuthCustomer = class AuthCustomer {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AuthCustomer.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], AuthCustomer.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AuthCustomer.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], AuthCustomer.prototype, "email", void 0);
AuthCustomer = __decorate([
    (0, graphql_1.ObjectType)()
], AuthCustomer);
exports.AuthCustomer = AuthCustomer;
let SendOtpInput = class SendOtpInput {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], SendOtpInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SendOtpInput.prototype, "email", void 0);
SendOtpInput = __decorate([
    (0, graphql_1.InputType)()
], SendOtpInput);
exports.SendOtpInput = SendOtpInput;
let VerifyOtpInput = class VerifyOtpInput {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], VerifyOtpInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], VerifyOtpInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], VerifyOtpInput.prototype, "otp", void 0);
VerifyOtpInput = __decorate([
    (0, graphql_1.InputType)()
], VerifyOtpInput);
exports.VerifyOtpInput = VerifyOtpInput;
let CreateCustomerInput = class CreateCustomerInput {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateCustomerInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateCustomerInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateCustomerInput.prototype, "otp", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCustomerInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.MinLength)(6, {
        message: 'Password is too short. Minimal length is $constraint1 characters',
    }),
    __metadata("design:type", String)
], CreateCustomerInput.prototype, "password", void 0);
CreateCustomerInput = __decorate([
    (0, graphql_1.InputType)()
], CreateCustomerInput);
exports.CreateCustomerInput = CreateCustomerInput;
let CustomerSignInDataInput = class CustomerSignInDataInput {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CustomerSignInDataInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CustomerSignInDataInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.MinLength)(6, {
        message: 'Password is too short. Minimal length is $constraint1 characters',
    }),
    __metadata("design:type", String)
], CustomerSignInDataInput.prototype, "password", void 0);
CustomerSignInDataInput = __decorate([
    (0, graphql_1.InputType)()
], CustomerSignInDataInput);
exports.CustomerSignInDataInput = CustomerSignInDataInput;
let CustomerForgotPasswordDataInput = class CustomerForgotPasswordDataInput {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CustomerForgotPasswordDataInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CustomerForgotPasswordDataInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.MinLength)(6, {
        message: 'Password is too short. Minimal length is $constraint1 characters',
    }),
    __metadata("design:type", String)
], CustomerForgotPasswordDataInput.prototype, "password", void 0);
CustomerForgotPasswordDataInput = __decorate([
    (0, graphql_1.InputType)()
], CustomerForgotPasswordDataInput);
exports.CustomerForgotPasswordDataInput = CustomerForgotPasswordDataInput;
let CustomerAuthResponseMessage = class CustomerAuthResponseMessage {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CustomerAuthResponseMessage.prototype, "message", void 0);
CustomerAuthResponseMessage = __decorate([
    (0, graphql_1.ObjectType)()
], CustomerAuthResponseMessage);
exports.CustomerAuthResponseMessage = CustomerAuthResponseMessage;
let RegistrationAuthResponse = class RegistrationAuthResponse {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], RegistrationAuthResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => CustomerAuthResponseMessage, { nullable: true }),
    __metadata("design:type", CustomerAuthResponseMessage)
], RegistrationAuthResponse.prototype, "data", void 0);
RegistrationAuthResponse = __decorate([
    (0, graphql_1.ObjectType)()
], RegistrationAuthResponse);
exports.RegistrationAuthResponse = RegistrationAuthResponse;
let ForgotPasswordResponse = class ForgotPasswordResponse {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ForgotPasswordResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => CustomerAuthResponseMessage, { nullable: true }),
    __metadata("design:type", CustomerAuthResponseMessage)
], ForgotPasswordResponse.prototype, "data", void 0);
ForgotPasswordResponse = __decorate([
    (0, graphql_1.ObjectType)()
], ForgotPasswordResponse);
exports.ForgotPasswordResponse = ForgotPasswordResponse;
let SendOtpAuthResponse = class SendOtpAuthResponse {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], SendOtpAuthResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => CustomerAuthResponseMessage, { nullable: true }),
    __metadata("design:type", CustomerAuthResponseMessage)
], SendOtpAuthResponse.prototype, "data", void 0);
SendOtpAuthResponse = __decorate([
    (0, graphql_1.ObjectType)()
], SendOtpAuthResponse);
exports.SendOtpAuthResponse = SendOtpAuthResponse;
let VerifyOtpAuthResponse = class VerifyOtpAuthResponse {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], VerifyOtpAuthResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => CustomerAuthResponseMessage, { nullable: true }),
    __metadata("design:type", CustomerAuthResponseMessage)
], VerifyOtpAuthResponse.prototype, "data", void 0);
VerifyOtpAuthResponse = __decorate([
    (0, graphql_1.ObjectType)()
], VerifyOtpAuthResponse);
exports.VerifyOtpAuthResponse = VerifyOtpAuthResponse;
let CustomerSignInResponseToken = class CustomerSignInResponseToken {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CustomerSignInResponseToken.prototype, "token", void 0);
CustomerSignInResponseToken = __decorate([
    (0, graphql_1.ObjectType)()
], CustomerSignInResponseToken);
exports.CustomerSignInResponseToken = CustomerSignInResponseToken;
let SignInAuthResponse = class SignInAuthResponse {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], SignInAuthResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => CustomerSignInResponseToken, { nullable: true }),
    __metadata("design:type", CustomerSignInResponseToken)
], SignInAuthResponse.prototype, "data", void 0);
SignInAuthResponse = __decorate([
    (0, graphql_1.ObjectType)()
], SignInAuthResponse);
exports.SignInAuthResponse = SignInAuthResponse;
let GetAuthCustomerQuery = class GetAuthCustomerQuery {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GetAuthCustomerQuery.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], GetAuthCustomerQuery.prototype, "email", void 0);
GetAuthCustomerQuery = __decorate([
    (0, graphql_1.InputType)()
], GetAuthCustomerQuery);
exports.GetAuthCustomerQuery = GetAuthCustomerQuery;
let GetCustomerAuthResponse = class GetCustomerAuthResponse {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], GetCustomerAuthResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => AuthCustomer, { nullable: true }),
    __metadata("design:type", AuthCustomer)
], GetCustomerAuthResponse.prototype, "data", void 0);
GetCustomerAuthResponse = __decorate([
    (0, graphql_1.ObjectType)()
], GetCustomerAuthResponse);
exports.GetCustomerAuthResponse = GetCustomerAuthResponse;
//# sourceMappingURL=auth.model.js.map