import { DescriptiveError, ErrorResponse } from 'src/common/errorResponse';
import { SuccessResponse } from 'src/common/successResponse';
import { Category, CategoryMeta, Photo } from './category';
export interface createCategoryRequest {
  name: string;
  parentSlug?: string;
  photo?: Photo;
  description?: string;
  showOnHomePage?: boolean;
  includeInTopMenu?: boolean;
  allowToSelectPageSize?: boolean;
  published?: boolean;
  displayOrder?: number;
  meta?: CategoryMeta;
}
export interface createCategorySuccessResponse extends SuccessResponse {
  code: number;
  data: Category;
}

export interface createCategoryErrorResponse extends ErrorResponse {
  code?: number;
  error: createCategoryErrorMessage;
  errors: DescriptiveError;
}

export const enum createCategoryErrorMessage {
  CAN_NOT_CREATE_CATEGORY = 'CAN_NOT_CREATE_CATEGORY',
}
export type createCategoryResponse =
  | createCategorySuccessResponse
  | createCategoryErrorResponse;
