import { DescriptiveError, ErrorResponse } from "src/common/errorResponse";
import { SuccessResponse } from "src/common/successResponse";
import { Info, Meta } from "./createBrand";
import { Brand } from "./brand";

export interface GetBrandByIdSuccessResponse extends SuccessResponse {
    code: number;
    data: Brand
}

export interface GetBrandByIdErrorResponse extends ErrorResponse{
    error: ErrorMessageGetBrandById;
}

export const enum ErrorMessageGetBrandById{
    INVALID_BRAND_ID = 'NO BRAND WITH SUCH ID',
    CANNOT_FIND_BRAND = 'Cannot find the brand'
}