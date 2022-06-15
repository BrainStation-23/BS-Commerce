import { DescriptiveError, ErrorResponse } from "src/common/errorResponse";
import { SuccessResponse } from "src/common/successResponse";
import { Category } from "./category";

export interface getCategoryRequest{
    categoryId:string;
}

export interface getCategorySuccessResponse extends SuccessResponse {
    code: number;
    data: Category;
}

export interface getCategoryErrorResponse extends ErrorResponse { 
    code?: number;
    error: getCategoryErrorMessage;
    errors: DescriptiveError;
}

export const enum getCategoryErrorMessage{
    CAN_NOT_GET_CATEGORY_BY_ID = 'CAN_NOT_GET_CATEGORY_BY_ID',
}
export type getCategoryResponse = getCategorySuccessResponse | getCategoryErrorResponse;