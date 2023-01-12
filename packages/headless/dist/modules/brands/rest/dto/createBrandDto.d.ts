import { CreateBrandRequest, CreateBrandSuccessResponse, CreateBrandErrorResponse, ErrorMessage } from '@bs-commerce/models';
import { BrandDto } from './brandDto';
import { InfoDto } from './infoDto';
import { MetaDto } from './metaDto';
export declare class CreateBrandRequestDto implements CreateBrandRequest {
    info: InfoDto;
    meta: MetaDto;
}
export declare class CreateBrandSuccessResponseDto implements CreateBrandSuccessResponse {
    code: number;
    data: BrandDto;
}
export declare class CreateBrandErrorResponseDto implements CreateBrandErrorResponse {
    code?: number;
    error: ErrorMessage.CANNOT_CREATE_BRAND | ErrorMessage.BRAND_ALREADY_EXISTS | ErrorMessage.NAME_REQUIRED | ErrorMessage.NAME_BE_VALID;
    errors: string[];
}
export declare type CreateBrandResponseDto = CreateBrandErrorResponseDto | CreateBrandSuccessResponseDto;
