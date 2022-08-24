import { DescriptiveError, ErrorResponse, SuccessResponse } from "src/index";

export interface UpdateHomePageProductsTag {
    id: string;
    name: string;
}

export interface UpdateHomePageProductsTagRequest {
    name?:string;
    isHomePageProductsTags?: boolean;
}

export interface UpdateHomePageProductsTagSuccessResponse extends SuccessResponse {
    code: number;
    data: UpdateHomePageProductsTag;
}

export const enum UpdateHomePageProductsTagErrorMessages {
    CAN_NOT_UPDATE_HOME_PAGE_PRODUCTS_TAG = 'CAN_NOT_UPDATE_HOME_PAGE_PRODUCTS_TAG',
}

export interface UpdateHomePageProductsTagErrorResponse extends ErrorResponse {
    code?: number;
    error: UpdateHomePageProductsTagErrorMessages;
    errors: DescriptiveError;
}

export type UpdateHomePageProductsTagResponse = UpdateHomePageProductsTagSuccessResponse | UpdateHomePageProductsTagErrorResponse;