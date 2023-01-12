import { BrandDto } from './brandDto';
import { GetBrandByIdErrorResponse, ErrorMessageGetBrandById, GetBrandByIdSuccessResponse } from '@bs-commerce/models';
export declare class GetBrandByIdErrorResponseDto implements GetBrandByIdErrorResponse {
    code?: number;
    error: ErrorMessageGetBrandById.INVALID_BRAND_ID | ErrorMessageGetBrandById.CANNOT_FIND_BRAND;
    errors: string[];
}
export declare class GetBrandByIdSuccessResponseDto implements GetBrandByIdSuccessResponse {
    code: number;
    data: BrandDto;
}
export declare type GetBrandByIdResponseDto = GetBrandByIdErrorResponseDto | GetBrandByIdSuccessResponseDto;
