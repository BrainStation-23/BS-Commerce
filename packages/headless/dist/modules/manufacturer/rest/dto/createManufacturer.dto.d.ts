import { CreateManufacturerRequest, CreateManufacturerErrorResponse, CreateManufacturerSuccessResponse, DescriptiveError } from '@bs-commerce/models';
import { CreateManufacturerErrorMessages } from '@bs-commerce/models';
import { ManufacturerDto } from './manufacturer.dto';
import { ManufacturerSeoDto } from './manufacturerSeo.dto';
export declare class CreateManufacturerDto implements CreateManufacturerRequest {
    name: string;
    description?: string;
    picture?: string;
    isPublished?: boolean;
    displayOrder?: number;
    seo?: ManufacturerSeoDto;
}
export declare class CreateManufacturerErrorResponseDto implements CreateManufacturerErrorResponse {
    code: number;
    error: CreateManufacturerErrorMessages.MANUFACTURER_ALREADY_EXISTS | CreateManufacturerErrorMessages.MANUFACTURER_NOT_CREATED_SUCCESSFULLY;
    errors: DescriptiveError;
}
declare class ManufacturerDataDto {
    manufacturer: ManufacturerDto;
    message: string | any;
}
export declare class CreateManufacturerSuccessResponseDto implements CreateManufacturerSuccessResponse {
    code: number;
    data: ManufacturerDataDto;
}
export declare type CreateManufacturerResponseDto = CreateManufacturerErrorResponseDto | CreateManufacturerSuccessResponseDto;
export {};
