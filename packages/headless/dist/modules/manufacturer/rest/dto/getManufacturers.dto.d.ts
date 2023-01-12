import { GetManufacturersErrorResponse, GetManufacturersSuccessResponse, DescriptiveError, GetManufacturersQuery, GetManufacturersErrorMessages, GetManufacturersSuccessMessages } from '@bs-commerce/models';
import { ManufacturerDto } from './manufacturer.dto';
export declare class GetManufacturersQueryDto implements GetManufacturersQuery {
    skip?: number;
    limit?: number;
}
export declare class GetManufacturersErrorResponseDto implements GetManufacturersErrorResponse {
    code: number;
    error: GetManufacturersErrorMessages.MANUFACTURERS_NOT_FOUND;
    errors: DescriptiveError;
}
declare class ManufacturersDataDto {
    manufacturers: ManufacturerDto[];
    total: number;
    message: GetManufacturersSuccessMessages.MANUFACTURERS_LOADED_SUCCESSFULLY;
}
export declare class GetManufacturersSuccessResponseDto implements GetManufacturersSuccessResponse {
    code: number;
    data: ManufacturersDataDto;
}
export declare type GetManufacturersResponseDto = GetManufacturersErrorResponseDto | GetManufacturersSuccessResponseDto;
export {};
