import { Product } from '../../../entity/product';
import { IBrandDatabase } from './brand.database.interface';
import { Injectable } from '@nestjs/common';
import { Brand } from 'src/entity/brand';

@Injectable()
export class BrandRepository {
    constructor(private readonly db: IBrandDatabase) { }

    async findBrandById(brandId: string): Promise<Brand | null> {
        const brand = await this.db.getBrandById(brandId);
        return brand;
    }

    async findAllBrands(skip?: number, limit?: number): Promise<Brand[]> {
        const brands = await this.db.getAllBrands(skip, limit);
        return brands;
    }

    async createBrand(brand: Brand): Promise<Brand | null> {
        const savedBrand = await this.db.addNewBrand(brand);
        return savedBrand;
    }

    async updateBrandById(brandId: string, brandUpdates: Brand): Promise<Brand | null>{
        const updatedBrand = await this.db.updateBrandById(brandId, brandUpdates);
        return updatedBrand;
    }

    async deleteBrandById(brandId: string): Promise<Brand | null>{
        const deletedBrand = await this.db.deleteBrandById(brandId);

        return deletedBrand;
    }
}
