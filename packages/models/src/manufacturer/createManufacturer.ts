import { DescriptiveError, ErrorResponse, SuccessResponse } from '../common/index';
import { Manufacturer } from './manufacturer';
import { ManufacturerSeo } from './manufacturerSeo';

export const enum CreateManufacturerErrorMessages {
    MANUFACTURER_ALREADY_EXISTS = 'MANUFACTURER_ALREADY_EXISTS',
    MANUFACTURER_NOT_CREATED_SUCCESSFULLY = 'MANUFACTURER_NOT_CREATED_SUCCESSFULLY'
}

export const enum CreateManufacturerSuccessMessages {
    MANUFACTURER_CREATED_SUCCESSFULLY = 'MANUFACTURER_CREATED_SUCCESSFULLY'
}

/**
* API Path: /manufacturer/create
* method: POST
* body: createManufacturerRequest
* response: CreateManufacturerResponse
*/

export interface CreateManufacturerRequest {
    name: string;
    description?: string;
    picture?: string;
    isPublished?: boolean;
    displayOrder?: number;
    seo?: ManufacturerSeo
}

export interface CreateManufacturerSuccessResponse extends SuccessResponse {
    code: number;
    data: {
        manufacturer: Manufacturer,
        message: CreateManufacturerSuccessMessages
    };
}

export interface CreateManufacturerErrorResponse extends ErrorResponse {
    code?: number;
    error: CreateManufacturerErrorMessages;
    errors: DescriptiveError;
}


export type CreateManufacturerResponse = CreateManufacturerSuccessResponse | CreateManufacturerErrorResponse;