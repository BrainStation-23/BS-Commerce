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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const elastic_service_1 = require("../services/elastic.service");
let SearchController = class SearchController {
    constructor(elasticService) {
        this.elasticService = elasticService;
    }
    async search(q, pageNumber, limit, res) {
        const _a = await this.elasticService.search(q, pageNumber, limit), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async searchSuggestion(q, res) {
        const _a = await this.elasticService.searchSuggestion(q), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
};
__decorate([
    (0, swagger_1.ApiQuery)({ name: 'q', description: 'search query', example: 'apple' }),
    (0, swagger_1.ApiQuery)({ name: 'pageNumber', required: false, example: '1' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, example: '20' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('q')),
    __param(1, (0, common_1.Query)('pageNumber')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "search", null);
__decorate([
    (0, swagger_1.ApiQuery)({ name: 'q', description: 'search suggestion', example: 'apple' }),
    (0, common_1.Get)('suggestion'),
    __param(0, (0, common_1.Query)('q')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "searchSuggestion", null);
SearchController = __decorate([
    (0, swagger_1.ApiTags)('Global search'),
    (0, common_1.Controller)('search'),
    __metadata("design:paramtypes", [elastic_service_1.ElasticService])
], SearchController);
exports.SearchController = SearchController;
//# sourceMappingURL=index.js.map