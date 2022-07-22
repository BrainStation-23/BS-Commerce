import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
import { Tag } from './tags';

/**
 * API Path: /tags
 * method: GET
 * response: GetTagsResponse
 */

export interface GetTagsSuccessResponse extends SuccessResponse {
    code: number;
    data: Tag[];
}

export const enum GetTagsErrorMessages {
    NO_TAGS_FOUND = 'NO_TAGS_FOUND',
}

export interface GetTagsErrorResponse extends ErrorResponse {
    code?: number;
    error: GetTagsErrorMessages;
    errors: DescriptiveError;
}

export type GetTagsResponse = GetTagsSuccessResponse | GetTagsErrorResponse;