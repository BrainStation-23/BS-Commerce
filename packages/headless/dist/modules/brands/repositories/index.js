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
exports.BrandRepository = void 0;
const common_1 = require("@nestjs/common");
const crypto = require("crypto");
const brand_database_interface_1 = require("./brand.database.interface");
let BrandRepository = class BrandRepository {
    constructor(db) {
        this.db = db;
    }
    async getBrandByName(brandName) {
        return await this.db.getBrandByName(brandName);
    }
    async getBrandById(brandId) {
        return await this.db.getBrandById(brandId);
    }
    async getAllBrands(skip, limit) {
        return await this.db.getAllBrands(skip, limit);
    }
    async createBrand(brand) {
        const id = crypto.randomUUID();
        const newBrand = Object.assign(Object.assign({}, brand), { id });
        return await this.db.addNewBrand(newBrand);
    }
    async updateBrandById(brandId, brandUpdates) {
        return await this.db.updateBrandById(brandId, brandUpdates);
    }
    async deleteBrandById(brandId) {
        return await this.db.deleteBrandById(brandId);
    }
};
BrandRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [brand_database_interface_1.IBrandDatabase])
], BrandRepository);
exports.BrandRepository = BrandRepository;
//# sourceMappingURL=index.js.map