import { DescriptiveError, ErrorResponse } from "src/common/errorResponse";
import { SuccessResponse } from "src/common/successResponse";
import { BrandInfo, BrandMeta } from "./createBrand";
import { Brand } from "./brand";

export interface DeleteBrandSuccessResponse extends SuccessResponse {
    code: number;
    data: Brand
}

export interface DeleteBrandErrorResponse extends ErrorResponse{
    error: ErrorMessageDeleteBrand;
    code?: number;
    errors: DescriptiveError;
}

export const enum ErrorMessageDeleteBrand{
    INVALID_BRAND_ID = 'NO BRAND WITH SUCH ID',
    CANNOT_DELETE_BRAND = 'CANNOT DELETE THE BRAND'
}

export type DeleteBrandResponse = DeleteBrandErrorResponse | DeleteBrandSuccessResponse;