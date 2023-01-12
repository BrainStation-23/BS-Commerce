import { DescriptiveError, GetManufacturerErrorResponse, GetManufacturerErrorMessages, UpdateManufacturerSuccessResponse } from '@bs-commerce/models';
import { ManufacturerDto } from './manufacturer.dto';
export declare class GetManufacturerErrorResponseDto implements GetManufacturerErrorResponse {
    code: number;
    error: GetManufacturerErrorMessages.MANUFACTURER_NOT_FOUND;
    errors: DescriptiveError;
}
declare class ManufacturerDataDto {
    manufacturer: ManufacturerDto;
    message: string | any;
}
export declare class GetManufacturerSuccessResponseDto implements UpdateManufacturerSuccessResponse {
    code: number;
    data: ManufacturerDataDto;
}
export declare type GetManufacturerResponseDto = GetManufacturerErrorResponseDto | GetManufacturerSuccessResponseDto;
export {};
