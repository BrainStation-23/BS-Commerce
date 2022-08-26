
import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
import { Tag } from './tags';

/**
 * API Path: /tags/:tagId
 * method: GET
 * params: tagId
 * response: GetTagResponse
 */

export interface GetTagParams {
    tagId: string
}

export interface GetTagSuccessResponse extends SuccessResponse {
    code: number;
    data: Tag;
}

export const enum GetTagErrorMessages {
    CAN_NOT_GET_TAG = 'CAN_NOT_GET_TAG',
}

export interface GetTagErrorResponse extends ErrorResponse {
    code?: number;
    error: GetTagErrorMessages;
    errors: DescriptiveError;
}

export type GetTagResponse = GetTagSuccessResponse | GetTagErrorResponse;