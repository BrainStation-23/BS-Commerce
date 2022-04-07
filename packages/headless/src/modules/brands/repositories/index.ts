import { Product } from '../../../entity/product';
import { IBrandDatabase } from './brand.database.interface';
import { Injectable } from '@nestjs/common';
import { Brand } from 'src/entity/brand';

@Injectable()
export class BrandRepository {
    constructor(private readonly db: IBrandDatabase) { }

    async findBrand(brandId: string): Promise<Brand | null> {
        const brand = await this.db.findById(brandId);
        return brand;
    }

    async findAllBrand(skip?: number, limit?: number): Promise<Brand[]> {
        const brands = await this.db.findAll(skip, limit);
        return brands;
    }

    async createBrand(brand: Brand): Promise<Brand | null> {
        const savedBrand = await this.db.save(brand);
        return savedBrand;
    }
}
