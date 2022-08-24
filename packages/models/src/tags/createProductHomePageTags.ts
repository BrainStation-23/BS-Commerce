import { DescriptiveError, ErrorResponse, SuccessResponse } from "src/index";

export interface HomePageProductsTags {
    id: string;
    name: string;
}

export interface HomePageProductsTagsRequest {
    name: string;
    isHomePageProductsTags?: boolean;
}

export interface CreateHomePageProductsTagsSuccessResponse extends SuccessResponse {
    code: number;
    data: HomePageProductsTags;
}

export const enum CreateHomePageProductsTagsErrorMessages {
    CAN_NOT_CREATE_HOME_PAGE_PRODUCT_TAG = 'CAN_NOT_CREATE_HOME_PAGE_PRODUCT_TAG',
    TAG_NAME_EXISTS = 'TAG_NAME_EXISTS',
}

export interface CreateHomePageProductsTagsErrorResponse extends ErrorResponse {
    code?: number;
    error: CreateHomePageProductsTagsErrorMessages;
    errors: DescriptiveError;
}

export type CreateHomePageProductsTagsResponse = CreateHomePageProductsTagsSuccessResponse | CreateHomePageProductsTagsErrorResponse;