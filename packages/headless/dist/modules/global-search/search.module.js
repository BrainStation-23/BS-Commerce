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
exports.SearchModule = void 0;
const common_1 = require("@nestjs/common");
const elasticsearch_1 = require("@nestjs/elasticsearch");
const search_1 = require("../../config/search");
const search_2 = require("../../database/mongodb/search");
const rest_1 = require("./rest");
const elastic_helper_1 = require("./services/elastic.helper");
const elastic_service_1 = require("./services/elastic.service");
let SearchModule = class SearchModule {
    constructor(helperService) {
        this.helperService = helperService;
    }
    async onModuleInit() {
        await this.helperService.createProductIndex();
    }
};
SearchModule = __decorate([
    (0, common_1.Module)({
        imports: [
            elasticsearch_1.ElasticsearchModule.register({
                node: search_1.searchConfig.node,
            }),
        ],
        controllers: [rest_1.SearchController],
        providers: [search_2.ProductSearchDatabase, elastic_service_1.ElasticService, elastic_helper_1.ElasticHelperService],
        exports: [elastic_service_1.ElasticService],
    }),
    __metadata("design:paramtypes", [elastic_helper_1.ElasticHelperService])
], SearchModule);
exports.SearchModule = SearchModule;
//# sourceMappingURL=search.module.js.map