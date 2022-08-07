import { DescriptiveError, ErrorResponse, SuccessResponse } from '../common/index';
import { Manufacturer } from './manufacturer';
import { ManufacturerSeo } from './manufacturerSeo';

export const enum UpdateManufacturerErrorMessages {
    MANUFACTURER_NOT_FOUND = 'MANUFACTURER_NOT_FOUND',
    THE_SAME_NAME_MANUFACTURER_ALREADY_EXISTS = 'THE_SAME_NAME_MANUFACTURER_ALREADY_EXISTS',
    MANUFACTURER_NOT_UPDATED = 'MANUFACTURER_NOT_UPDATED',
}

export const enum UpdateManufacturerSuccessMessages {
    MANUFACTURER_UPDATED_SUCCESSFULLY = 'MANUFACTURER_UPDATED_SUCCESSFULLY'
}

/**
* API Path: /manufacturer/{manufacturerId}
* method: PATCH
* body: UpdateManufacturerRequest
* response: UpdateManufacturerResponse
*/

export interface UpdateManufacturerRequest {
    name?: string;
    description?: string;
    picture?: string;
    isPublished?: boolean;
    displayOrder?: number;
    seo?: ManufacturerSeo
}

export interface UpdateManufacturerSuccessResponse extends SuccessResponse {
    code: number;
    data: {
        manufacturer: Manufacturer,
        message: UpdateManufacturerSuccessMessages
    };
}

export interface UpdateManufacturerErrorResponse extends ErrorResponse {
    code?: number;
    error: UpdateManufacturerErrorMessages;
    errors: DescriptiveError;
}


export type UpdateManufacturerResponse = UpdateManufacturerSuccessResponse | UpdateManufacturerErrorResponse;