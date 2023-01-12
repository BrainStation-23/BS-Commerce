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
exports.ElasticHelperService = void 0;
const common_1 = require("@nestjs/common");
const elasticsearch_1 = require("@nestjs/elasticsearch");
const search_1 = require("../../../database/mongodb/search");
const product_schema_1 = require("./product.schema");
let ElasticHelperService = class ElasticHelperService {
    constructor(esService, productSearchDB) {
        this.esService = esService;
        this.productSearchDB = productSearchDB;
    }
    async createProductSchema() {
        await this.esService.indices.putMapping({
            index: 'products',
            type: 'products',
            include_type_name: true,
            body: {
                properties: product_schema_1.productSearchSchema,
            },
        });
    }
    async createProductIndex() {
        try {
            const isExist = await this.esService.indices.exists({
                index: 'products',
            });
            if (isExist.statusCode !== 200) {
                await this.esService.indices.create({ index: 'products' });
                await this.createProductSchema();
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    mapSearchData(e) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const data = {};
        data.info = {};
        data.meta = {};
        data.id = e.id || '';
        data.info.name = ((_a = e === null || e === void 0 ? void 0 : e.info) === null || _a === void 0 ? void 0 : _a.name) || '';
        data.info.shortDescription = ((_b = e === null || e === void 0 ? void 0 : e.info) === null || _b === void 0 ? void 0 : _b.shortDescription) || '';
        data.info.fullDescription = ((_c = e === null || e === void 0 ? void 0 : e.info) === null || _c === void 0 ? void 0 : _c.fullDescription) || '';
        data.info.sku = ((_d = e === null || e === void 0 ? void 0 : e.info) === null || _d === void 0 ? void 0 : _d.sku) || '';
        data.info.price = ((_e = e === null || e === void 0 ? void 0 : e.info) === null || _e === void 0 ? void 0 : _e.price) || 0;
        data.info.oldPrice = ((_f = e === null || e === void 0 ? void 0 : e.info) === null || _f === void 0 ? void 0 : _f.oldPrice) || 0;
        data.info.cost = ((_g = e === null || e === void 0 ? void 0 : e.info) === null || _g === void 0 ? void 0 : _g.cost) || 0;
        data.meta.keywords = ((_h = e === null || e === void 0 ? void 0 : e.meta) === null || _h === void 0 ? void 0 : _h.keywords) || [];
        data.meta.title = ((_j = e === null || e === void 0 ? void 0 : e.meta) === null || _j === void 0 ? void 0 : _j.title) || '';
        data.meta.description = ((_k = e === null || e === void 0 ? void 0 : e.meta) === null || _k === void 0 ? void 0 : _k.description) || '';
        data.brands = (e === null || e === void 0 ? void 0 : e.brands) || [];
        data.categories =
            (e === null || e === void 0 ? void 0 : e.categories.map((c) => {
                return { id: c === null || c === void 0 ? void 0 : c.id, name: c === null || c === void 0 ? void 0 : c.name };
            })) || [];
        data.manufacturer = (e === null || e === void 0 ? void 0 : e.manufacturer) || {};
        data.photos = e === null || e === void 0 ? void 0 : e.photos.map((p) => {
            return {
                url: p.url,
                title: p.title,
                alt: p.alt,
            };
        });
        data.tags = (e === null || e === void 0 ? void 0 : e.tags) || [];
        return data;
    }
    async getProductSearchData(searchKey, pageNumber = 1, limit = 20) {
        if (typeof pageNumber === 'string')
            pageNumber = parseInt(pageNumber);
        if (typeof limit === 'string')
            limit = parseInt(limit);
        limit = limit > 30 ? 30 : limit;
        const query = {
            query: {
                bool: {
                    should: {
                        multi_match: {
                            query: searchKey,
                            fields: [
                                'info.name',
                                'info.shortDescription',
                                'info.fullDescription',
                                'sku',
                                'meta.title',
                                'tags',
                                'brands',
                                'categories.name',
                                'manufacturer.name',
                            ],
                        },
                    },
                },
            },
        };
        console.log(limit);
        const startTime = Date.now();
        const { body: { hits }, } = await this.esService.search({
            from: (pageNumber - 1) * limit || 0,
            size: limit,
            index: 'products',
            type: 'products',
            body: query,
        });
        console.log('search time = ', Date.now() - startTime);
        const totalItemsFound = hits.total.value;
        const products = hits.hits.map((hit) => {
            return hit._source;
        });
        return {
            totalItemsFound,
            pageNumber,
            limit,
            products,
        };
    }
    async getProductSearchSuggestion(searchKey) {
        const query = {
            query: {
                prefix: {
                    key: {
                        value: searchKey,
                    },
                },
            },
        };
        const { body: { hits }, } = await this.esService.search({
            from: 0,
            size: 20,
            index: 'suggestion',
            type: 'suggestion',
            body: query,
        });
        const resultsCount = hits.total.value;
        const values = hits.hits.map((hit) => {
            return hit._source.key;
        });
        return {
            resultsCount,
            values,
        };
    }
};
ElasticHelperService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [elasticsearch_1.ElasticsearchService,
        search_1.ProductSearchDatabase])
], ElasticHelperService);
exports.ElasticHelperService = ElasticHelperService;
//# sourceMappingURL=elastic.helper.js.map