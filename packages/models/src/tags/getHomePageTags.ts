import { DescriptiveError, ErrorResponse, SuccessResponse } from "src/index";

export interface GetHomePageProductsTags {
    id: string;
    name: string;
}

export interface GetHomePageProductsTagsSuccessResponse extends SuccessResponse {
    code: number;
    data: GetHomePageProductsTags;
}

export const enum GetHomePageProductsTagsErrorMessages {
    NO_TAGS_FOUND = 'NO_TAGS_FOUND',
}

export interface GetHomePageProductsTagsErrorResponse extends ErrorResponse {
    code?: number;
    error: GetHomePageProductsTagsErrorMessages;
    errors: DescriptiveError;
}

export type GetHomePageProductsTagsResponse = GetHomePageProductsTagsSuccessResponse | GetHomePageProductsTagsErrorResponse;