import { BrandDto } from './brandDto';
import { UpdateBrandSuccessResponse, UpdateBrandErrorResponse, UpdateBrandRequest, ErrorMessageUpdate, BrandUpdateInfo } from '@bs-commerce/models';
import { MetaDto } from './metaDto';
export declare class UpdateInfoDto implements BrandUpdateInfo {
    description?: string;
    allowToSelectPageSize?: boolean;
    published?: boolean;
    displayOrder?: number;
    pageSizeOptions?: number[];
}
export declare class UpdateBrandRequestdto implements UpdateBrandRequest {
    info?: UpdateInfoDto;
    meta?: MetaDto;
}
export declare class UpdateBrandErrorResponseDto implements UpdateBrandErrorResponse {
    code?: number;
    error: ErrorMessageUpdate.INVALID_BRAND_ID | ErrorMessageUpdate.CANNOT_UPDATE_BRAND | ErrorMessageUpdate.BRAND_ALREADY_EXISTS | ErrorMessageUpdate.INFO_OR_META_OBJECT_MISSING;
    errors: string[];
}
export declare class UpdateBrandSuccessResponseDto implements UpdateBrandSuccessResponse {
    code: number;
    data?: BrandDto;
}
export declare type UpdateBrandResponseDto = UpdateBrandErrorResponseDto | UpdateBrandSuccessResponseDto;
