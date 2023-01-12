import { CreateBrandRequest, CreateBrandResponse, DeleteBrandResponse, GetAllBrandsResponse, GetBrandByIdResponse, UpdateBrandRequest, UpdateBrandResponse } from '@bs-commerce/models';
import { BrandRepository } from './../repositories/index';
import { Helper } from '../../../helper/helper.interface';
export declare class BrandService {
    private brandRepo;
    private helper;
    constructor(brandRepo: BrandRepository, helper: Helper);
    createBrand(brand: CreateBrandRequest): Promise<CreateBrandResponse>;
    getAllBrands(skip?: number, limit?: number): Promise<GetAllBrandsResponse>;
    updateBrandById(brandId: string, brandFeatures: UpdateBrandRequest): Promise<UpdateBrandResponse>;
    getBrandById(brandId: string): Promise<GetBrandByIdResponse>;
    getBrandByName(name: string): Promise<GetBrandByIdResponse>;
    deleteBrandById(brandId: string): Promise<DeleteBrandResponse>;
}
