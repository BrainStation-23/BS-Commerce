import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
import { Tag } from './tags';

/**
 * API Path: /tags/:tagId
 * method: PATCH
 * params: tagId
 * response: UpdateTagResponse
 */

export interface UpdateTagRequest {
  name?: string;
  isHomePageProductsTag?: boolean;
}

export interface UpdateTagParams {
  tagId: string;
}

export const enum UpdateTagErrorMessages {
  TAG_NAME_EXISTS = 'TAG_NAME_EXISTS',
  CAN_NOT_UPDATE_TAG = 'CAN_NOT_UPDATE_TAG',
}

export interface UpdateTagSuccessResponse extends SuccessResponse {
  code: number;
  data: Tag;
}

export interface UpdateTagErrorResponse extends ErrorResponse {
  code?: number;
  error: UpdateTagErrorMessages;
  errors: DescriptiveError;
}

export type UpdateTagResponse =
  | UpdateTagSuccessResponse
  | UpdateTagErrorResponse;
