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
    status?: string;
    code?: number;
    data: CreateBrandRequest
}

export interface CreateBrandErrorResponse extends ErrorResponse {
    code?: number;
    error: 'Can\'t create brand' | 'Brand name already exists' | 'Info is required' | 'Name is required';
    errors: DescriptiveError;
}

export type CreateBrandResponse = CreateBrandSuccessResponse | CreateBrandErrorResponse;