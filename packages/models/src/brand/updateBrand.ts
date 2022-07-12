import { Brand } from './brand';
import { ErrorResponse } from "src/common/errorResponse";
import { SuccessResponse } from "src/common/successResponse";
import { BrandInfo, BrandMeta } from "./createBrand";

export interface UpdateBrandRequest{
    info: BrandInfo,
    meta: BrandMeta
}

export interface UpdatedBrand{
    id:string,
    info: BrandInfo,
    meta: BrandMeta
}

export interface UpdateBrandSuccessResponse extends SuccessResponse {
    code: number;
    data?: Brand
}

export interface UpdateBrandErrorResponse extends ErrorResponse{
    error: ErrorMessageUpdate;
}

export const enum ErrorMessageUpdate{
    INVALID_BRAND_ID = 'NO BRAND WITH SUCH ID',
    CANNOT_UPDATE_BRAND = 'CANNOT UPDATE THE BRAND',
    BRAND_ALREADY_EXISTS = 'BRAND ALREADY EXISTS'
}

export type UpdateBrandResponse = UpdateBrandErrorResponse | UpdateBrandSuccessResponse;