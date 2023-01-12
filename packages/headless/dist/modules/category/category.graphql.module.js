"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModule = void 0;
const common_1 = require("@nestjs/common");
const database_resolver_1 = require("../../database/database.resolver");
const category_resolver_1 = require("./graphql/category.resolver");
const repositories_1 = require("./repositories");
const category_database_interface_1 = require("./repositories/category.database.interface");
const services_1 = require("./services");
let CategoryModule = class CategoryModule {
};
CategoryModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [
            category_resolver_1.CategoryResolver,
            services_1.CategoryService,
            repositories_1.CategoryRepository,
            {
                provide: category_database_interface_1.ICategoryDatabase,
                useClass: (0, database_resolver_1.ResolveDatabaseDependency)('CATEGORY'),
            },
        ],
    })
], CategoryModule);
exports.CategoryModule = CategoryModule;
//# sourceMappingURL=category.graphql.module.js.map