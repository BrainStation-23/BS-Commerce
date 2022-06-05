import { DescriptiveError, ErrorResponse } from "src/common/errorResponse";
import { SuccessResponse } from "src/common/successResponse";

export interface CreateBrandRequest{
    id?: string,
    info: Info,
    meta?: Meta
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

export interface createBrandSuccessResponse extends SuccessResponse {
    status: string;
    code: number;
    data: CreateBrandRequest
}

export interface createBrandErrorResponse extends ErrorResponse {
    code?: number;
    error: 'Can\'t create brand' | 'Brand name already exists' | 'Info is required' | 'Name is required';
}

export type CreateBrandResponse = createBrandSuccessResponse | createBrandErrorResponse;