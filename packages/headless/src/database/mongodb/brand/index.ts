import { Brand } from 'src/entity/brand';
import { IBrandDatabase } from 'src/modules/brands/repositories/brand.database.interface';
import { BrandModel } from './brand.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BrandDatabase implements IBrandDatabase {

    async getBrandByName(brandName: string): Promise<Brand | null> {
        return await BrandModel.findOne({ "info.name": brandName }).lean();
    }

    async getBrandById(brandId: string): Promise<Brand | null> {
        return await BrandModel.findOne({ "info.brandId": brandId }).lean();
    }

    async addNewBrand(brand: Brand): Promise<Brand | null> {
        return await BrandModel.create(brand);
    }

    async deleteBrandById (brandId: string): Promise<Brand | null>{
        return await BrandModel.findOneAndRemove({ "info.brandId" : brandId }).lean();
    }

    async getAllBrands(skip?: number, limit?: number): Promise<Brand[] | null> {
        return await BrandModel.find({}).skip(skip).limit(limit).lean();
    }

    async updateBrandById(brandId: string, brand: Brand): Promise<Brand | null> {
        return await BrandModel.findOneAndUpdate({"info.brandId" : brandId}, brand, { new: true }).lean();
    }
}
