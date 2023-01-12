"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const database_resolver_1 = require("../../database/database.resolver");
const repositories_1 = require("../../modules/user/repositories");
const user_database_interface_1 = require("../../modules/user/repositories/user.database.interface");
const user_resolver_1 = require("./graphql/user.resolver");
const services_1 = require("./services");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [
            user_resolver_1.UserResolver,
            services_1.UserService,
            repositories_1.UserRepository,
            {
                provide: user_database_interface_1.IUserDatabase,
                useClass: (0, database_resolver_1.ResolveDatabaseDependency)('USER'),
            },
        ],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.graphql.module.js.map