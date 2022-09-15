import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
import { Tag } from './tags';

/**
 * API Path: /tags
 * method: POST
 * body: CreateTagRequestBody
 * response: CreateTagResponse
 */

export interface CreateTagRequestBody {
  name: string;
  isHomePageProductsTag?: boolean;
}

export interface CreateTagSuccessResponse extends SuccessResponse {
  code: number;
  data: Tag;
}

export const enum CreateTagErrorMessages {
  TAG_NAME_EXISTS = 'TAG_NAME_EXISTS',
  CAN_NOT_CREATE_TAG = 'CAN_NOT_CREATE_TAG',
}

export interface CreateTagErrorResponse extends ErrorResponse {
  code?: number;
  error: CreateTagErrorMessages;
  errors: DescriptiveError;
}

export type CreateTagResponse =
  | CreateTagSuccessResponse
  | CreateTagErrorResponse;
