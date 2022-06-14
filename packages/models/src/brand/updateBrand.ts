import { Brand } from './brand';
import { ErrorResponse } from "src/common/errorResponse";
import { SuccessResponse } from "src/common/successResponse";
import { Info, Meta } from "./createBrand";

export interface UpdateBrandRequest{
    info: Info,
    meta: Meta
}

export interface UpdatedBrand{
    id:string,
    info: Info,
    meta: Meta
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
    CANNOT_UPDATE_BRAND = 'Cannot update the brand'
}
