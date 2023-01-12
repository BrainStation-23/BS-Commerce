"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerModule = void 0;
const common_1 = require("@nestjs/common");
const database_resolver_1 = require("../../database/database.resolver");
const manufacturer_resolver_1 = require("./graphql/manufacturer.resolver");
const repositories_1 = require("./repositories");
const manufacturer_database_interface_1 = require("./repositories/manufacturer.database.interface");
const manufacturer_service_1 = require("./services/manufacturer.service");
let ManufacturerModule = class ManufacturerModule {
};
ManufacturerModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [
            manufacturer_resolver_1.ManufacturerResolver,
            manufacturer_service_1.ManufacturerService,
            repositories_1.ManufacturerRepository,
            {
                provide: manufacturer_database_interface_1.IManufacturerDatabase,
                useClass: (0, database_resolver_1.ResolveDatabaseDependency)('MANUFACTURER'),
            },
        ],
    })
], ManufacturerModule);
exports.ManufacturerModule = ManufacturerModule;
//# sourceMappingURL=manufacturer.graphql.module.js.map