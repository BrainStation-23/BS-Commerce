"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandDatabase = void 0;
const common_1 = require("@nestjs/common");
const brand_model_1 = require("./brand.model");
let BrandDatabase = class BrandDatabase {
    async getAllBrands(skip, limit) {
        return await brand_model_1.BrandModel.find({})
            .skip(skip)
            .limit(limit)
            .select('-_id')
            .lean();
    }
    async getBrandByName(brandName) {
        return await brand_model_1.BrandModel.findOne({ 'info.name': brandName })
            .select('-_id')
            .lean();
    }
    async getBrandById(brandId) {
        return await brand_model_1.BrandModel.findOne({ id: brandId }).select('-_id').lean();
    }
    async addNewBrand(brand) {
        return await brand_model_1.BrandModel.create(brand);
    }
    async updateBrandById(brandId, brand) {
        return await brand_model_1.BrandModel.findOneAndUpdate({ id: brandId }, brand, {
            new: true,
        }).select('-_id');
    }
    async deleteBrandById(brandId) {
        return await brand_model_1.BrandModel.findOneAndRemove({ id: brandId })
            .select('-_id')
            .lean();
    }
};
BrandDatabase = __decorate([
    (0, common_1.Injectable)()
], BrandDatabase);
exports.BrandDatabase = BrandDatabase;
//# sourceMappingURL=index.js.map