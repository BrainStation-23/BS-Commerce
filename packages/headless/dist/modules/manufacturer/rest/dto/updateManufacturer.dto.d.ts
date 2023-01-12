import { DescriptiveError, UpdateManufacturerRequest, UpdateManufacturerErrorResponse, UpdateManufacturerErrorMessages, UpdateManufacturerSuccessResponse } from '@bs-commerce/models';
import { ManufacturerDto } from './manufacturer.dto';
import { ManufacturerSeoDto } from './manufacturerSeo.dto';
export declare class UpdateManufacturerDto implements UpdateManufacturerRequest {
    name: string;
    description?: string;
    picture?: string;
    isPublished?: boolean;
    displayOrder?: number;
    seo?: ManufacturerSeoDto;
}
export declare class UpdateManufacturerErrorResponseDto implements UpdateManufacturerErrorResponse {
    code: number;
    error: UpdateManufacturerErrorMessages.MANUFACTURER_NOT_FOUND | UpdateManufacturerErrorMessages.MANUFACTURER_NOT_UPDATED;
    errors: DescriptiveError;
}
declare class ManufacturerDataDto {
    manufacturer: ManufacturerDto;
    message: string | any;
}
export declare class UpdateManufacturerSuccessResponseDto implements UpdateManufacturerSuccessResponse {
    code: number;
    data: ManufacturerDataDto;
}
export declare type UpdateManufacturerResponseDto = UpdateManufacturerErrorResponseDto | UpdateManufacturerSuccessResponseDto;
export {};
