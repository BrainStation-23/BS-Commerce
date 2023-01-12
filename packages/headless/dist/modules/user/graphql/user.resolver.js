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
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const auth_decorator_1 = require("../../../decorators/auth.decorator");
const services_1 = require("../services");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../../guards/auth.guard");
const user_model_1 = require("./user.model");
const helper_interface_1 = require("../../../helper/helper.interface");
let UserResolver = class UserResolver {
    constructor(userService, helper) {
        this.userService = userService;
        this.helper = helper;
    }
    async getUser(admin) {
        const res = await this.userService.getUser(admin.id);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async updateUser(data, admin) {
        const res = await this.userService.updateUser(admin.id, data);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async changePassword(passwordDetails, admin) {
        const res = await this.userService.changePassword(admin.id, passwordDetails);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
};
__decorate([
    (0, graphql_1.Query)(() => user_model_1.AdminResponse),
    __param(0, (0, auth_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.Admin]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_model_1.AdminResponse),
    __param(0, (0, graphql_1.Args)('data')),
    __param(1, (0, auth_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.UpdateUserInput,
        user_model_1.Admin]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_model_1.ChangePasswordResponse),
    __param(0, (0, graphql_1.Args)('passwordDetails')),
    __param(1, (0, auth_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.ChangePasswordInput,
        user_model_1.Admin]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "changePassword", null);
UserResolver = __decorate([
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [services_1.UserService, helper_interface_1.Helper])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map