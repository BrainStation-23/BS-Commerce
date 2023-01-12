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
exports.AuthResolver = void 0;
const services_1 = require("../services");
const graphql_1 = require("@nestjs/graphql");
const auth_model_1 = require("./auth.model");
const helper_interface_1 = require("../../../helper/helper.interface");
let AuthResolver = class AuthResolver {
    constructor(authService, helper) {
        this.authService = authService;
        this.helper = helper;
    }
    async signUp(admin) {
        const res = await this.authService.signUp(admin);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async signIn(data) {
        const res = await this.authService.signIn(data);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => auth_model_1.AdminSignUpResponse),
    __param(0, (0, graphql_1.Args)('admin')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_model_1.AdminSignUpInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "signUp", null);
__decorate([
    (0, graphql_1.Mutation)(() => auth_model_1.AdminSignInResponse),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_model_1.AdminSignInInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "signIn", null);
AuthResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [services_1.AuthService, helper_interface_1.Helper])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map