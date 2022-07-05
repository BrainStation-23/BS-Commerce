import { DescriptiveError, ErrorResponse } from "src/common/errorResponse";
import { SuccessResponse } from "src/common/successResponse";
import { Category } from "./category";

export interface getCategoryBySlugRequest{
    slug:string;
}

export interface getCategoryBySlugSuccessResponse extends SuccessResponse {
    code: number;
    data: Category;
}

export interface getCategoryBySlugErrorResponse extends ErrorResponse { 
    code?: number;
    error: getCategoryBySlugErrorMessage;
    errors: DescriptiveError;
}

export const enum getCategoryBySlugErrorMessage{
    CAN_NOT_GET_CATEGORY_BY_SLUG = 'CAN_NOT_GET_CATEGORY_BY_SLUG',
}
export type getCategoryBySlugResponse = getCategoryBySlugSuccessResponse | getCategoryBySlugErrorResponse;