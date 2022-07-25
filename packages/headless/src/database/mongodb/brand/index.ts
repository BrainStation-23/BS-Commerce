import { Injectable } from '@nestjs/common';
import { CreateBrandRequest, GetAllBrands, UpdateBrandRequest } from 'models';

import { Brand } from 'src/entity/brand';
import { IBrandDatabase } from 'src/modules/brands/repositories/brand.database.interface';
import { BrandModel } from './brand.model';

@Injectable()
export class BrandDatabase implements IBrandDatabase {

    async getAllBrands(skip?: number, limit?: number): Promise<GetAllBrands | null> {
        return await BrandModel.find({}).skip(skip).limit(limit).lean();
    }

    async getBrandByName(brandName: string): Promise<Brand | null> {
        return await BrandModel.findOne({ "info.name": brandName }).lean();
    }

    async getBrandById(brandId: string): Promise<Brand | null> {
        return await BrandModel.findOne({ id: brandId }).lean();
    }

    async addNewBrand(brand: CreateBrandRequest): Promise<Brand | null> {
        return await BrandModel.create(brand);
    }
    
    async updateBrandById(brandId: string, brand: UpdateBrandRequest): Promise<Brand | null> {
        return await BrandModel.findOneAndUpdate({ id : brandId}, brand, { new: true });
    }
   
    async deleteBrandById (brandId: string): Promise<Brand | null>{
        return await BrandModel.findOneAndRemove({ id : brandId }).lean();
    }

}
