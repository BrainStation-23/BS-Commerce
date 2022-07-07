import { DescriptiveError, ErrorResponse } from "src/common/errorResponse";
import { SuccessResponse } from "src/common/successResponse";

export interface CreateBrandRequest{
    id?: string,
    info: Info,
    meta: Meta
}

export interface Info{
    name: string,
    description?: string,
    allowToSelectPageSize?: boolean,
    published?: boolean,
    displayOrder?: number,
    pageSizeOptions?: number[] 
}
export interface Meta {
    keywords?: string,
    description?: string,
    title?: string,
    SEFN?: string
}

export interface CreateBrandSuccessResponse extends SuccessResponse {
    code: number;
    data: CreateBrandRequest
}

export interface CreateBrandErrorResponse extends ErrorResponse{
    error: ErrorMessage;
}

export const enum ErrorMessage{
    CANNOT_CREATE_BRAND = 'CANNOT CREATE BRAND',
    BRAND_ALREADY_EXISTS = 'BRAND ALREADY EXISTS',
    NAME_REQUIRED = 'NAME IS REQUIRED',
    NAME_BE_VALID = 'NAME MUST BE VALID'
}

