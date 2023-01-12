import { CreateBrandRequest, GetAllBrands, UpdateBrandRequest } from '@bs-commerce/models';
import { Brand } from '../../../entity/brand';
export declare abstract class IBrandDatabase {
    abstract getBrandByName: (brandName: string) => Promise<Brand | null>;
    abstract getBrandById: (brandId: string) => Promise<Brand | null>;
    abstract addNewBrand: (brand: CreateBrandRequest) => Promise<Brand | null>;
    abstract getAllBrands: (skip?: number, limit?: number) => Promise<GetAllBrands | null>;
    abstract updateBrandById: (brandId: string, brand: UpdateBrandRequest) => Promise<Brand | null>;
    abstract deleteBrandById: (brandId: string) => Promise<Brand | null>;
}
