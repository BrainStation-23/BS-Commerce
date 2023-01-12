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
exports.ProductRepository = void 0;
const product_database_interface_1 = require("./product.database.interface");
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
let ProductRepository = class ProductRepository {
    constructor(db) {
        this.db = db;
    }
    async findProduct(query) {
        return await this.db.findProduct(query);
    }
    async findAllProducts(query, skip, limit, price, orderBy) {
        return await this.db.findAllProducts(query, skip, limit, price, orderBy);
    }
    async getAllConditionalProducts(query, price, slug, orderBy, skip, limit) {
        return await this.db.getAllConditionalProducts(query, price, slug, orderBy, skip, limit);
    }
    async createProduct(product) {
        product.id = (0, crypto_1.randomUUID)();
        return await this.db.createProduct(product);
    }
    async getProductCount(query) {
        return await this.db.getProductCount(query);
    }
    async deleteProduct(productId) {
        return await this.db.deleteProduct(productId);
    }
    async updateProduct(product, productId) {
        return await this.db.updateProduct(product, productId);
    }
    async updateProductsForBrand(productIds, brandId) {
        return await this.db.updateProductsForBrand(productIds, brandId);
    }
    async getProductsList(skip, limit, query, sortCondition) {
        return await this.db.getProductsList(skip, limit, query, sortCondition);
    }
    async getTopSellingProducts(skip, limit) {
        return await this.db.getTopSellingProducts(skip, limit);
    }
    async getNewArrivalProducts(skip, limit) {
        return await this.db.getNewArrivalProducts(skip, limit);
    }
    async getTag(query) {
        return await this.db.getTag(query);
    }
};
ProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_database_interface_1.IProductDatabase])
], ProductRepository);
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=index.js.map