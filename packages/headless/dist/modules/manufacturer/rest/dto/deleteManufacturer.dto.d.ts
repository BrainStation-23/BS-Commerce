import { DescriptiveError, DeleteManufacturerErrorResponse, DeleteManufacturerErrorMessages, DeleteManufacturerSuccessResponse } from '@bs-commerce/models';
import { ManufacturerDto } from './manufacturer.dto';
export declare class DeleteManufacturerErrorResponseDto implements DeleteManufacturerErrorResponse {
    code: number;
    error: DeleteManufacturerErrorMessages.MANUFACTURER_NOT_FOUND | DeleteManufacturerErrorMessages.MANUFACTURER_NOT_DELETED;
    errors: DescriptiveError;
}
declare class ManufacturerDataDto {
    manufacturer: ManufacturerDto;
    message: string | any;
}
export declare class DeleteManufacturerSuccessResponseDto implements DeleteManufacturerSuccessResponse {
    code: number;
    data: ManufacturerDataDto;
}
export declare type DeleteManufacturerResponseDto = DeleteManufacturerErrorResponseDto | DeleteManufacturerSuccessResponseDto;
export {};
