"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const helper_module_1 = require("./helper/helper.module");
const graphql_module_resolver_1 = require("./internal/graphql/graphql.module.resolver");
const rest_module_resolver_1 = require("./internal/rest/rest.module.resolver");
const core_1 = require("./config/core");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            helper_module_1.HelperModule,
            ...(core_1.coreConfig.api === 'GRAPHQL'
                ? (0, graphql_module_resolver_1.ResolveGraphqlModule)()
                : (0, rest_module_resolver_1.ResolveRestModule)()),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map