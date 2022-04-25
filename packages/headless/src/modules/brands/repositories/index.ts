import { Product } from '../../../entity/product';
import { IBrandDatabase } from './brand.database.interface';
import { Injectable } from '@nestjs/common';
import { Brand } from 'src/entity/brand';

@Injectable()
export class BrandRepository {
    constructor(private readonly db: IBrandDatabase) { }

    async getBrandByName(brandName: string): Promise<Brand | null> {
       return await this.db.getBrandByName(brandName);   
    }
    
    async getBrandById(brandId: string): Promise<Brand | null> {
        return await this.db.getBrandById(brandId);   
     }

    async getAllBrands(skip?: number, limit?: number): Promise<Brand[]> {
        return await this.db.getAllBrands(skip, limit);
    }

    async createBrand(brand: Brand): Promise<Brand | null> {
       return await this.db.addNewBrand(brand);  
    }

    async updateBrandById(brandId: string, brandUpdates: Brand): Promise<Brand | null>{
        return await this.db.updateBrandById(brandId, brandUpdates);
    }

    async deleteBrandById(brandId: string): Promise<Brand | null>{
        return await this.db.deleteBrandById(brandId);
    }
}
