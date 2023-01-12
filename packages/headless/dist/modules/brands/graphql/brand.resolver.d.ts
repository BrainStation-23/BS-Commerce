import { BrandService } from '../services';
import { BrandInput } from './brand.model';
export declare class BrandResolver {
    private brandService;
    constructor(brandService: BrandService);
    getBrand(BrandId: string): Promise<import("@bs-commerce/models").GetBrandByIdResponse>;
    getAllBrands(skip: number, limit: number): Promise<import("@bs-commerce/models").GetAllBrandsResponse>;
    addNewBrand(brand: BrandInput): Promise<import("@bs-commerce/models").CreateBrandResponse>;
    deleteBrandById(brandId: string): Promise<import("@bs-commerce/models").DeleteBrandResponse>;
    updateBrandById(brandId: string, brand: BrandInput): Promise<import("@bs-commerce/models").UpdateBrandResponse>;
}
