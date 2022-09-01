import { DescriptiveError, ErrorResponse, SuccessResponse } from "src/index";

export interface createHomePageTag {
    id: string;
    name: string;
}

export interface createHomePageTagRequest {
    name: string;
    isCreateHomePageTag?: boolean;
}

export interface createHomePageTagSuccessResponse extends SuccessResponse {
    code: number;
    data: createHomePageTag;
}

export const enum createHomePageTagErrorMessages {
    CAN_NOT_CREATE_HOME_PAGE_PRODUCT_TAG = 'CAN_NOT_CREATE_HOME_PAGE_PRODUCT_TAG',
    TAG_NAME_EXISTS = 'TAG_NAME_EXISTS',
}

export interface createHomePageTagErrorResponse extends ErrorResponse {
    code?: number;
    error: createHomePageTagErrorMessages;
    errors: DescriptiveError;
}

export type createHomePageTagResponse = createHomePageTagSuccessResponse | createHomePageTagErrorResponse;