"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const database_resolver_1 = require("../../database/database.resolver");
const repositories_1 = require("./repositories");
const product_database_interface_1 = require("./repositories/product.database.interface");
const services_1 = require("./services");
const product_resolver_1 = require("./graphql/product.resolver");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [
            product_resolver_1.ProductResolver,
            services_1.ProductService,
            repositories_1.ProductRepository,
            {
                provide: product_database_interface_1.IProductDatabase,
                useClass: (0, database_resolver_1.ResolveDatabaseDependency)('PRODUCT'),
            },
        ],
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.graphql.module.js.map