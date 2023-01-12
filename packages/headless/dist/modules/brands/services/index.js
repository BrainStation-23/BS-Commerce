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
exports.BrandService = void 0;
const common_1 = require("@nestjs/common");
const index_1 = require("./../repositories/index");
const helper_interface_1 = require("../../../helper/helper.interface");
let BrandService = class BrandService {
    constructor(brandRepo, helper) {
        this.brandRepo = brandRepo;
        this.helper = helper;
    }
    async createBrand(brand) {
        const doesBrandExist = await this.brandRepo.getBrandByName(brand.info.name);
        if (doesBrandExist)
            return {
                error: "BRAND ALREADY EXISTS",
                errors: null,
                code: common_1.HttpStatus.BAD_REQUEST,
            };
        else {
            const newBrand = await this.brandRepo.createBrand(brand);
            if (!newBrand)
                return {
                    error: "CANNOT CREATE BRAND",
                    errors: null,
                    code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                };
            return this.helper.serviceResponse.successResponse(newBrand, common_1.HttpStatus.CREATED);
        }
    }
    async getAllBrands(skip, limit) {
        const allBrands = await this.brandRepo.getAllBrands(skip, limit);
        if (!allBrands)
            return {
                error: 'COULD NOT GET THE BRANDS DUE TO SERVER ERROR',
                errors: null,
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            };
        return this.helper.serviceResponse.successResponse({ brands: allBrands }, common_1.HttpStatus.OK);
    }
    async updateBrandById(brandId, brandFeatures) {
        const oldBrand = await this.brandRepo.getBrandById(brandId);
        if (!oldBrand)
            return {
                error: "NO BRAND WITH SUCH ID",
                errors: null,
                code: common_1.HttpStatus.BAD_REQUEST,
            };
        for (const key in brandFeatures) {
            if (oldBrand[key] && key !== 'id') {
                if (typeof brandFeatures[key] === 'object') {
                    for (const k in brandFeatures[key]) {
                        if (oldBrand[key].hasOwnProperty(k) && k !== 'id') {
                            oldBrand[key][k] = brandFeatures[key][k];
                        }
                    }
                }
            }
            else {
                return {
                    error: "INFO OR META OBJECT MISSING",
                    errors: null,
                    code: common_1.HttpStatus.BAD_REQUEST,
                };
            }
        }
        const updatedBrand = await this.brandRepo.updateBrandById(brandId, oldBrand);
        if (!updatedBrand)
            return {
                error: "CANNOT UPDATE THE BRAND",
                errors: null,
                code: common_1.HttpStatus.BAD_REQUEST,
            };
        return this.helper.serviceResponse.successResponse(updatedBrand, common_1.HttpStatus.OK);
    }
    async getBrandById(brandId) {
        const foundBrand = await this.brandRepo.getBrandById(brandId);
        if (!foundBrand)
            return {
                error: "NO BRAND WITH SUCH ID",
                errors: null,
                code: common_1.HttpStatus.BAD_REQUEST,
            };
        return this.helper.serviceResponse.successResponse(foundBrand, common_1.HttpStatus.OK);
    }
    async getBrandByName(name) {
        const foundBrand = await this.brandRepo.getBrandByName(name);
        if (!foundBrand)
            return {
                error: "BRAND NAME NOT FOUND",
                errors: null,
                code: common_1.HttpStatus.BAD_REQUEST,
            };
        return this.helper.serviceResponse.successResponse(foundBrand, common_1.HttpStatus.OK);
    }
    async deleteBrandById(brandId) {
        const deletedBrand = await this.brandRepo.deleteBrandById(brandId);
        if (!deletedBrand)
            return {
                error: "NO BRAND WITH SUCH ID",
                errors: null,
                code: common_1.HttpStatus.BAD_REQUEST,
            };
        return this.helper.serviceResponse.successResponse(deletedBrand, common_1.HttpStatus.OK);
    }
};
BrandService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [index_1.BrandRepository, helper_interface_1.Helper])
], BrandService);
exports.BrandService = BrandService;
//# sourceMappingURL=index.js.map