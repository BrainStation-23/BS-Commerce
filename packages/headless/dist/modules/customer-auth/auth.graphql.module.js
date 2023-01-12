"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const database_resolver_1 = require("../../database/database.resolver");
const services_1 = require("./services");
const auth_1 = require("../../config/auth");
const auth_resolver_1 = require("./graphql/auth.resolver");
const customer_database_interface_1 = require("../customer/repositories/customer.database.interface");
const repositories_1 = require("../customer/repositories");
const jwt_strategy_1 = require("../../guards/jwt-strategy");
let CustomerAuthModule = class CustomerAuthModule {
};
CustomerAuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: auth_1.authConfig.jwt_key,
                signOptions: {
                    expiresIn: auth_1.authConfig.expiration_time,
                },
            }),
        ],
        controllers: [],
        providers: [
            auth_resolver_1.CustomerAuthResolver,
            services_1.CustomerAuthService,
            repositories_1.CustomerRepository,
            {
                provide: customer_database_interface_1.ICustomerDatabase,
                useClass: (0, database_resolver_1.ResolveDatabaseDependency)('CUSTOMER_AUTH'),
            },
            jwt_strategy_1.JwtStrategy,
        ],
    })
], CustomerAuthModule);
exports.CustomerAuthModule = CustomerAuthModule;
//# sourceMappingURL=auth.graphql.module.js.map