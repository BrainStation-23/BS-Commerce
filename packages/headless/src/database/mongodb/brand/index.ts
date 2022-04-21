import { Brand } from 'src/entity/brand';
import { IBrandDatabase } from 'src/modules/brands/repositories/brand.database.interface';
import { BrandModel } from './brand.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BrandDatabase implements IBrandDatabase {
    constructor() { }

    async getBrandById(brandId: string): Promise<Brand | null>{
        const foundBrand = await BrandModel.findOne({ _id: brandId }).lean();
        return Promise.resolve(foundBrand);
    }

    async addNewBrand(brand: Brand): Promise<Brand | null> {
        const createdBrand = await BrandModel.create(brand);
        console.log(createdBrand);
        return Promise.resolve(createdBrand);
    }

    async deleteBrandById (brandId: string): Promise<Brand | null>{
        const deletedBrand = await BrandModel.findOneAndRemove({_id: brandId}).lean();
        
        return Promise.resolve(deletedBrand);
    }

    async getAllBrands(skip?: number, limit?: number): Promise<Brand[] | null> {
        const allBrands = await BrandModel.find({}).skip(skip).limit(limit).lean();
        return Promise.resolve(allBrands);
    }

    async updateBrandById(brandId: string, brand: Brand): Promise<Brand | null> {
        const updatedBrand = await BrandModel
            .findByIdAndUpdate(brandId, brand)
            .setOptions({ overwrite: true, new: true })
            .lean();
        
        return Promise.resolve(updatedBrand);
    }
}
