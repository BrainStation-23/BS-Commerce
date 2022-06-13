import { DescriptiveError, ErrorResponse } from "src/common/errorResponse";
import { SuccessResponse } from "src/common/successResponse";
import { Category } from "./category";

export interface addCategoryRequest {
    name: string;
    parentSlug: string;
}

export interface addCategorySuccessResponse extends SuccessResponse {
    code: number;
    data: Category;
}

export interface addCategoryErrorResponse extends ErrorResponse { 
    code?: number;
    error: addCategoryErrorMessage;
    errors: DescriptiveError;
}

export const enum addCategoryErrorMessage{
    CAN_NOT_ADD_CATEGORY = 'CAN_NOT_ADD_CATEGORY',
}
export type addCategoryResponse = addCategorySuccessResponse | addCategoryErrorResponse;