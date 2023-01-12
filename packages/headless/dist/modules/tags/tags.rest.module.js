"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsModule = void 0;
const common_1 = require("@nestjs/common");
const database_resolver_1 = require("../../database/database.resolver");
const rest_1 = require("./rest");
const services_1 = require("./services");
const repositories_1 = require("./repositories");
const tags_database_interface_1 = require("./repositories/tags.database.interface");
let TagsModule = class TagsModule {
};
TagsModule = __decorate([
    (0, common_1.Module)({
        controllers: [rest_1.TagsController],
        providers: [
            services_1.TagsService,
            repositories_1.TagsRepository,
            {
                provide: tags_database_interface_1.ITagsDatabase,
                useClass: (0, database_resolver_1.ResolveDatabaseDependency)('TAGS'),
            },
        ],
    })
], TagsModule);
exports.TagsModule = TagsModule;
//# sourceMappingURL=tags.rest.module.js.map