import { CreateBrandRequest, GetAllBrands, UpdateBrandRequest } from '@bs-commerce/models';
import { Brand } from '../../../entity/brand';
import { IBrandDatabase } from '../../../modules/brands/repositories/brand.database.interface';
export declare class BrandDatabase implements IBrandDatabase {
    getAllBrands(skip?: number, limit?: number): Promise<GetAllBrands | null>;
    getBrandByName(brandName: string): Promise<Brand | null>;
    getBrandById(brandId: string): Promise<Brand | null>;
    addNewBrand(brand: CreateBrandRequest): Promise<Brand | null>;
    updateBrandById(brandId: string, brand: UpdateBrandRequest): Promise<Brand | null>;
    deleteBrandById(brandId: string): Promise<Brand | null>;
}
