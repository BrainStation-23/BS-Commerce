import { SuccessResponse } from 'src/common/successResponse';
import { ErrorResponse } from 'src/common/errorResponse';
import { Brand } from "./brand"

export interface GetAllBrands{
    brands: Brand[] 
}

export interface GetAllBrandsSuccessResponse extends SuccessResponse{
    code: number,
    data: GetAllBrands
}

export interface GetAllBrandsErrorResponse extends ErrorResponse{ }

export type GetAllBrandsResponse = GetAllBrandsErrorResponse | GetAllBrandsSuccessResponse;