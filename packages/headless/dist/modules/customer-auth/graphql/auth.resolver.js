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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAuthResolver = void 0;
const services_1 = require("../services");
const graphql_1 = require("@nestjs/graphql");
const auth_model_1 = require("./auth.model");
const helper_interface_1 = require("../../../helper/helper.interface");
let CustomerAuthResolver = class CustomerAuthResolver {
    constructor(authService, helper) {
        this.authService = authService;
        this.helper = helper;
    }
    async getCustomer(query) {
        const res = await this.authService.getCustomer(query);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async register(customer) {
        const res = await this.authService.register(customer);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async sendOtpForRegistration(data) {
        const res = await this.authService.registerSendOTP(data);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async customerSignIn(data) {
        const res = await this.authService.signIn(data);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async sendOtpForForgotPassword(data) {
        const res = await this.authService.forgotPasswordSendOTP(data);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async verifyOtpForForgotPassword(data) {
        const res = await this.authService.forgotPasswordVerifyOTP(data);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async forgotPassword(data) {
        const res = await this.authService.forgotPassword(data);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
};
__decorate([
    (0, graphql_1.Query)(() => auth_model_1.GetCustomerAuthResponse),
    __param(0, (0, graphql_1.Args)('query', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_model_1.GetAuthCustomerQuery]),
    __metadata("design:returntype", Promise)
], CustomerAuthResolver.prototype, "getCustomer", null);
__decorate([
    (0, graphql_1.Mutation)(() => auth_model_1.RegistrationAuthResponse),
    __param(0, (0, graphql_1.Args)('customer')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_model_1.CreateCustomerInput]),
    __metadata("design:returntype", Promise)
], CustomerAuthResolver.prototype, "register", null);
__decorate([
    (0, graphql_1.Mutation)(() => auth_model_1.SendOtpAuthResponse),
    __param(0, (0, graphql_1.Args)('data', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_model_1.SendOtpInput]),
    __metadata("design:returntype", Promise)
], CustomerAuthResolver.prototype, "sendOtpForRegistration", null);
__decorate([
    (0, graphql_1.Mutation)(() => auth_model_1.SignInAuthResponse),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_model_1.CustomerSignInDataInput]),
    __metadata("design:returntype", Promise)
], CustomerAuthResolver.prototype, "customerSignIn", null);
__decorate([
    (0, graphql_1.Mutation)(() => auth_model_1.SendOtpAuthResponse),
    __param(0, (0, graphql_1.Args)('data', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_model_1.SendOtpInput]),
    __metadata("design:returntype", Promise)
], CustomerAuthResolver.prototype, "sendOtpForForgotPassword", null);
__decorate([
    (0, graphql_1.Mutation)(() => auth_model_1.VerifyOtpAuthResponse),
    __param(0, (0, graphql_1.Args)('data', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_model_1.VerifyOtpInput]),
    __metadata("design:returntype", Promise)
], CustomerAuthResolver.prototype, "verifyOtpForForgotPassword", null);
__decorate([
    (0, graphql_1.Mutation)(() => auth_model_1.ForgotPasswordResponse),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_model_1.CustomerForgotPasswordDataInput]),
    __metadata("design:returntype", Promise)
], CustomerAuthResolver.prototype, "forgotPassword", null);
CustomerAuthResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [services_1.CustomerAuthService,
        helper_interface_1.Helper])
], CustomerAuthResolver);
exports.CustomerAuthResolver = CustomerAuthResolver;
//# sourceMappingURL=auth.resolver.js.map