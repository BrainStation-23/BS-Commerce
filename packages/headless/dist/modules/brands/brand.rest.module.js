"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandModule = void 0;
const common_1 = require("@nestjs/common");
const brand_controller_1 = require("./rest/brand.controller");
const database_resolver_1 = require("../../database/database.resolver");
const brand_database_interface_1 = require("../../modules/brands/repositories/brand.database.interface");
const index_1 = require("./services/index");
const index_2 = require("./repositories/index");
let BrandModule = class BrandModule {
};
BrandModule = __decorate([
    (0, common_1.Module)({
        controllers: [brand_controller_1.BrandController],
        providers: [
            index_1.BrandService,
            index_2.BrandRepository,
            { provide: brand_database_interface_1.IBrandDatabase, useClass: (0, database_resolver_1.ResolveDatabaseDependency)('BRAND') },
        ],
    })
], BrandModule);
exports.BrandModule = BrandModule;
//# sourceMappingURL=brand.rest.module.js.map