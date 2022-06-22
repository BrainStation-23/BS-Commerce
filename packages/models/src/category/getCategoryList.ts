import { DescriptiveError, ErrorResponse } from "src/common/errorResponse";
import { SuccessResponse } from "src/common/successResponse";

export interface getCategoryListCategory {
    slug: string;
    ancestors: getCategoryListAncestor[];
    subCategories?:getCategoryListCategory[];
}

export interface getCategoryListAncestor {
    name: string;
    slug: string;
    level: number;
}
export interface getCategoryListSuccessResponse extends SuccessResponse {
    code: number;
    data: getCategoryListCategory[];
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