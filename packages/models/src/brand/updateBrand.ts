import { Brand } from './brand';
import { SuccessResponse } from 'src/common/successResponse';
import { BrandInfo, BrandMeta } from './createBrand';
import { DescriptiveError } from 'src/index';

export interface UpdateBrandRequest {
  info?: BrandUpdateInfo;
  meta?: BrandMeta;
}

export interface BrandUpdateInfo {
  description?: string;
  allowToSelectPageSize?: boolean;
  published?: boolean;
  displayOrder?: number;
  pageSizeOptions?: number[];
}
export interface UpdatedBrand {
  id: string;
  info: BrandInfo;
  meta: BrandMeta;
}

export interface UpdateBrandSuccessResponse extends SuccessResponse {
  code: number;
  data?: Brand;
}

export interface UpdateBrandErrorResponse {
  error: ErrorMessageUpdate;
  code?: number;
  errors: DescriptiveError;
}

export const enum ErrorMessageUpdate {
  INVALID_BRAND_ID = 'NO BRAND WITH SUCH ID',
  CANNOT_UPDATE_BRAND = 'CANNOT UPDATE THE BRAND',
  BRAND_ALREADY_EXISTS = 'BRAND ALREADY EXISTS',
  INFO_OR_META_OBJECT_MISSING = 'INFO OR META OBJECT MISSING',
}

export type UpdateBrandResponse =
  | UpdateBrandErrorResponse
  | UpdateBrandSuccessResponse;
