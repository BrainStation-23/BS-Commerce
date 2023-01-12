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
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const execution_context_host_1 = require("@nestjs/core/helpers/execution-context-host");
const graphql_1 = require("@nestjs/graphql");
const passport_1 = require("@nestjs/passport");
const core_1 = require("../config/core");
let RolesGuard = class RolesGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor(roles) {
        super();
        this.roles = roles;
    }
    canActivate(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        const { req } = ctx.getContext();
        return core_1.coreConfig.api === 'GRAPHQL'
            ? super.canActivate(new execution_context_host_1.ExecutionContextHost([req]))
            : super.canActivate(context);
    }
    handleRequest(err, user, info) {
        if (!this.roles) {
            return user || null;
        }
        if (!user) {
            throw new common_1.UnauthorizedException('Sorry! You are not a valid user for this action.');
        }
        const role = user.role;
        const doesRoleMatch = this.roles.some((r) => r === role);
        if (!doesRoleMatch) {
            throw new common_1.UnauthorizedException('Sorry! You are not a valid user for this action.');
        }
        return user;
    }
};
RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Array])
], RolesGuard);
exports.RolesGuard = RolesGuard;
//# sourceMappingURL=auth.guard.js.map