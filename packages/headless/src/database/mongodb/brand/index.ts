import { Injectable } from '@nestjs/common';

import { Brand } from 'src/entity/brand';
import { IBrandDatabase } from 'src/modules/brands/repositories/brand.database.interface';
import { BrandModel } from './brand.model';
import { UpdateBrandResponseDto, UpdateBrandRequestdto } from 'src/modules/brands/dto/updateBrandDto';
import { GetAllBrandsDto } from 'src/modules/brands/dto/getAllBrandsDto';
import { CreateBrandRequestDto } from 'src/modules/brands/dto/createBrandDto';
import { BrandDto } from 'src/modules/brands/dto/brandDto';
import { CreateBrandRequest } from 'models';

@Injectable()
export class BrandDatabase implements IBrandDatabase {

    async getAllBrands(skip?: number, limit?: number): Promise<GetAllBrandsDto | null> {
        return await BrandModel.find({}).skip(skip).limit(limit).lean();
    }

    async getBrandByName(brandName: string): Promise<Brand | null> {
        return await BrandModel.findOne({ "info.name": brandName }).lean();
    }

    async getBrandById(brandId: string): Promise<BrandDto | null> {
        return await BrandModel.findOne({ id: brandId }).lean();
    }

    async addNewBrand(brand: CreateBrandRequest): Promise<Brand | null> {
        return await BrandModel.create(brand);
    }
    
    async updateBrandById(brandId: string, brand: UpdateBrandRequestdto): Promise<BrandDto | null> {
        return await BrandModel.findOneAndUpdate({ id : brandId}, brand, { new: true });
    }
   
    async deleteBrandById (brandId: string): Promise<BrandDto | null>{
        return await BrandModel.findOneAndRemove({ id : brandId }).lean();
    }

}
