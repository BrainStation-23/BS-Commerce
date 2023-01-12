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
const info_model_1 = require("./info.model");
const meta_model_1 = require("./meta.model");
let BrandDatabase = class BrandDatabase {
    async getAllBrands(skip, limit) {
        return await brand_model_1.default.findAll({
            include: [{ all: true, nested: true }],
        });
    }
    async getBrandByName(brandName) {
        return await info_model_1.default.findOne({ where: { name: brandName } });
    }
    async getBrandById(brandId) {
        return await brand_model_1.default.findOne({
            where: { id: brandId },
            include: [{ all: true, nested: true }],
        });
    }
    async addNewBrand(brand) {
        return await brand_model_1.default.create({
            info: brand.info,
            meta: brand.meta,
        }, { include: [info_model_1.default, meta_model_1.default] });
    }
    async updateBrandById(brandId, brand) {
        let updatedInfo, updatedMeta;
        try {
            updatedInfo = await info_model_1.default.update(brand.info, { where: { brandId } });
            updatedMeta = await meta_model_1.default.update(brand.meta, { where: { brandId } });
        }
        catch (err) {
            console.log(err);
        }
        return await brand_model_1.default.findOne({
            where: { id: brandId },
            include: [{ all: true, nested: true }],
        });
    }
    async deleteBrandById(brandId) {
        let deletedInfo, deletedMeta, deletedId;
        try {
            deletedInfo = await info_model_1.default.destroy({ where: { brandId } });
            deletedMeta = await meta_model_1.default.destroy({ where: { brandId } });
            deletedId = await brand_model_1.default.destroy({ where: { id: brandId } });
        }
        catch (err) {
            console.log(err);
        }
        return null;
    }
};
BrandDatabase = __decorate([
    (0, common_1.Injectable)()
], BrandDatabase);
exports.BrandDatabase = BrandDatabase;
//# sourceMappingURL=index.js.map