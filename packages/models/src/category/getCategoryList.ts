import { DescriptiveError, ErrorResponse } from "src/common/errorResponse";
import { SuccessResponse } from "src/common/successResponse";
import { Photo } from "./category";
export interface subCategoryList {
    id: string;
    name: string;
    photo: Photo;
    published: boolean;
    displayOrder: number;
    slug: string;
    ancestors: getCategoryListAncestor[];
    subCategories?: any[];
}
export interface NestedCategoryList {
    id: string;
    name: string;
    photo: Photo;
    published: boolean;
    displayOrder: number;
    slug: string;
    ancestors: getCategoryListAncestor[];
    subCategories?: subCategoryList[];
}
export interface getCategoryList {
    categories: NestedCategoryList[];
}
export interface getCategoryListAncestor {
    name: string;
    slug: string;
    level: number;
}
export interface getCategoryListSuccessResponse extends SuccessResponse {
    code: number;
    data: getCategoryList;
}

export interface getCategoryListErrorResponse extends ErrorResponse {
    code?: number;
    error: getCategoryListErrorMessage;
    errors: DescriptiveError;
}

export const enum getCategoryListErrorMessage {
    CAN_NOT_GET_CATEGORY_LIST = 'CAN_NOT_GET_CATEGORY_LIST',
}
export type getCategoryListResponse = getCategoryListSuccessResponse | getCategoryListErrorResponse;