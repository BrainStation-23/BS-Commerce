import { DescriptiveError, ErrorResponse } from "src/common/errorResponse";
import { SuccessResponse } from "src/common/successResponse";
import { ProductPhoto } from "src/index";
import { Category, Meta } from "./category";

export interface Photo{
    url:string,
    alt:string,
}
export interface addCategoryRequest {
    name: string,
    parentSlug?:string,
    photo: Photo;
    description?: string,
    showOnHomePage?: boolean,
    includeInTopMenu?: boolean,
    allowToSelectPageSize?: boolean,
    published?: boolean,
    displayOrder?: number,
    meta?: Meta
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

export const enum addCategoryErrorMessage {
    CAN_NOT_ADD_CATEGORY = 'CAN_NOT_ADD_CATEGORY',
}
export type addCategoryResponse = addCategorySuccessResponse | addCategoryErrorResponse;