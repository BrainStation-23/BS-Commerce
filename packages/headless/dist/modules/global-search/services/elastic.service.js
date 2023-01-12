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
exports.ElasticService = void 0;
const common_1 = require("@nestjs/common");
const elasticsearch_1 = require("@nestjs/elasticsearch");
const search_1 = require("../../../database/mongodb/search");
const response_1 = require("../../../utils/response");
const elastic_helper_1 = require("./elastic.helper");
let ElasticService = class ElasticService {
    constructor(esService, productSearchDB, esHelperService) {
        this.esService = esService;
        this.productSearchDB = productSearchDB;
        this.esHelperService = esHelperService;
    }
    async singleInsert(productId) {
        try {
            const index = 'products';
            const productData = await this.productSearchDB.findProductById(productId);
            if (!productData) {
                console.log('Product not found');
                return 0;
            }
            const body = await this.esHelperService.mapSearchData(productData);
            const result = await this.esService.index({ index, refresh: true, body });
            return result.statusCode;
        }
        catch (error) {
            console.log(error);
            return 0;
        }
    }
    async deleteSingleByElasticId(id) {
        try {
            const index = 'products';
            const type = 'products';
            const result = await this.esService.delete({ index, type, id });
            return result.statusCode;
        }
        catch (error) {
            console.log(error);
            return 0;
        }
    }
    async search(keyword, pageNumber = 1, limit = 20) {
        const result = await this.esHelperService.getProductSearchData(keyword, pageNumber, limit);
        if (!result) {
            return (0, response_1.errorResponse)('Error while searching', null, common_1.HttpStatus.CONFLICT);
        }
        return (0, response_1.successResponse)(null, result, common_1.HttpStatus.OK);
    }
    async searchSuggestion(keyword) {
        const result = await this.esHelperService.getProductSearchSuggestion(keyword);
        if (!result) {
            return (0, response_1.errorResponse)('Error while searching', null, common_1.HttpStatus.CONFLICT);
        }
        return (0, response_1.successResponse)(null, result, common_1.HttpStatus.OK);
    }
};
ElasticService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [elasticsearch_1.ElasticsearchService,
        search_1.ProductSearchDatabase,
        elastic_helper_1.ElasticHelperService])
], ElasticService);
exports.ElasticService = ElasticService;
//# sourceMappingURL=elastic.service.js.map