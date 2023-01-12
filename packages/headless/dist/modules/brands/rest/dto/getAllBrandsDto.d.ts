import { GetAllBrandsSuccessResponse, GetAllBrandsErrorResponse, GetAllBrands } from '@bs-commerce/models';
import { BrandDto } from './brandDto';
export declare class GetAllBrandsDto implements GetAllBrands {
    brands: BrandDto[];
}
export declare class GetAllBrandsSuccessResponseDto implements GetAllBrandsSuccessResponse {
    code: number;
    data: GetAllBrandsDto;
}
export declare class GetAllBrandsErrorResponseDto implements GetAllBrandsErrorResponse {
    code?: number;
    error: string;
    errors: string[];
}
export declare type GetAllBrandsResponseDto = GetAllBrandsSuccessResponseDto | GetAllBrandsErrorResponseDto;
