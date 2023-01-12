"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModule = void 0;
const common_1 = require("@nestjs/common");
const database_resolver_1 = require("../../database/database.resolver");
const cart_resolver_1 = require("./graphql/cart.resolver");
const repositories_1 = require("./repositories");
const cart_database_interface_1 = require("./repositories/cart.database.interface");
const services_1 = require("./services");
let CartModule = class CartModule {
};
CartModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [
            cart_resolver_1.CartResolver,
            services_1.CartService,
            repositories_1.CartRepository,
            { provide: cart_database_interface_1.ICartDatabase, useClass: (0, database_resolver_1.ResolveDatabaseDependency)('CART') },
        ],
    })
], CartModule);
exports.CartModule = CartModule;
//# sourceMappingURL=cart.graphql.module.js.map