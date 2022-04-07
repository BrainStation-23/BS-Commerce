import { Brand } from 'src/entity/brand';
import { IBrandDatabase } from 'src/modules/brands/repositories/brand.database.interface';
import { BrandModel } from './brand.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BrandDatabase implements IBrandDatabase {
    constructor() { }

    async findById(brandId: string) {
        const brand = await BrandModel.findOne({ _id: brandId });
        return Promise.resolve(brand);
    }
    async save(brand: Brand) {
        await BrandModel.create(brand);
        return Promise.resolve(brand);
    }

    async findAll(skip?: number, limit?: number) {
        const brands = await BrandModel.find({}).skip(skip).limit(limit);
        return Promise.resolve(brands);
    }

    async update(brandId: string, brand: Brand){
        const updatedBrand = await BrandModel
            .findByIdAndUpdate(brandId, brand)
            .setOptions({ overwrite: true, new: true });
        
        return Promise.resolve(brand);
    }
}
