import { SuccessResponse } from 'src/common/successResponse';
import { DescriptiveError, ErrorResponse } from 'src/common/errorResponse';
import { Brand } from "./brand"

export interface GetAllBrands{
    brands: Brand[] 
}

export interface GetAllBrandsSuccessResponse extends SuccessResponse{
    code: number,
    data: GetAllBrands
}

export interface GetAllBrandsErrorResponse extends ErrorResponse{ 
    code?: number;
    errors: DescriptiveError;
    error: string;
}

export type GetAllBrandsResponse = GetAllBrandsErrorResponse | GetAllBrandsSuccessResponse;