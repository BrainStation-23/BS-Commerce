import { BrandDto } from './brandDto';
import { DeleteBrandErrorResponse, ErrorMessageDeleteBrand, DeleteBrandSuccessResponse } from '@bs-commerce/models';
export declare class DeleteBrandErrorResponseDto implements DeleteBrandErrorResponse {
    code?: number;
    error: ErrorMessageDeleteBrand.INVALID_BRAND_ID | ErrorMessageDeleteBrand.CANNOT_DELETE_BRAND;
    errors: string[];
}
export declare class DeleteBrandSuccessResponseDto implements DeleteBrandSuccessResponse {
    code: number;
    data: BrandDto;
}
export declare type DeleteBrandResponseDto = DeleteBrandErrorResponseDto | DeleteBrandSuccessResponseDto;
