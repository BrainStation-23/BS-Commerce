import { Response } from 'express';
import { BrandService } from '../services/index';
import { CreateBrandRequestDto } from '../../../modules/brands/rest/dto/createBrandDto';
import { UpdateBrandRequestdto } from '../../../modules/brands/rest/dto/updateBrandDto';
export declare class BrandController {
    private brandService;
    constructor(brandService: BrandService);
    getAllBrands(skip: number, limit: number, res: Response): Promise<{
        errors: DescriptiveError;
        error: string;
        code: number;
    } | {
        data: import("@bs-commerce/models").GetAllBrands;
        code: number;
    }>;
    getBrandByName(name: string, res: Response): Promise<{
        error: import("@bs-commerce/models").ErrorMessageGetBrandById;
        errors: DescriptiveError;
        code: number;
    } | {
        data: import("@bs-commerce/models").Brand;
        code: number;
    }>;
    getBrand(brandId: string, res: Response): Promise<{
        error: import("@bs-commerce/models").ErrorMessageGetBrandById;
        errors: DescriptiveError;
        code: number;
    } | {
        data: import("@bs-commerce/models").Brand;
        code: number;
    }>;
    createBrand(brand: CreateBrandRequestDto, res: Response): Promise<{
        error: import("@bs-commerce/models").ErrorMessage;
        errors: DescriptiveError;
        code: number;
    } | {
        data: import("@bs-commerce/models").CreateBrandRequest;
        code: number;
    }>;
    updateBrand(brandId: string, featuresToUpdate: UpdateBrandRequestdto, res: Response): Promise<{
        error: import("@bs-commerce/models").ErrorMessageUpdate;
        errors: DescriptiveError;
        code: number;
    } | {
        data?: import("@bs-commerce/models").Brand;
        code: number;
    }>;
    deleteBrandById(brandId: string, res: Response): Promise<{
        error: import("@bs-commerce/models").ErrorMessageDeleteBrand;
        errors: DescriptiveError;
        code: number;
    } | {
        data: import("@bs-commerce/models").Brand;
        code: number;
    }>;
}
