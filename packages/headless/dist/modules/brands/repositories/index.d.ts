import { CreateBrandRequest, GetAllBrands, UpdateBrandRequest } from '@bs-commerce/models';
import { IBrandDatabase } from './brand.database.interface';
import { Brand } from '../../../entity/brand';
export declare class BrandRepository {
    private readonly db;
    constructor(db: IBrandDatabase);
    getBrandByName(brandName: string): Promise<Brand | null>;
    getBrandById(brandId: string): Promise<Brand | null>;
    getAllBrands(skip?: number, limit?: number): Promise<GetAllBrands>;
    createBrand(brand: CreateBrandRequest): Promise<Brand | null>;
    updateBrandById(brandId: string, brandUpdates: UpdateBrandRequest): Promise<Brand | null>;
    deleteBrandById(brandId: string): Promise<Brand | null>;
}
