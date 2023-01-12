import { IBrandDatabase } from '../../../modules/brands/repositories/brand.database.interface';
import { Brand } from '../../../entity/brand';
export declare class BrandDatabase implements IBrandDatabase {
    getAllBrands(skip?: number, limit?: number): Promise<any | null>;
    getBrandByName(brandName: string): Promise<any | null>;
    getBrandById(brandId: string): Promise<any | null>;
    addNewBrand(brand: Brand): Promise<any | null>;
    updateBrandById(brandId: string, brand: Brand): Promise<any | null>;
    deleteBrandById(brandId: string): Promise<any | null>;
}
