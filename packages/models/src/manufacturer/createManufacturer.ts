import { DescriptiveError, ErrorResponse, SuccessResponse } from '../common/index';
import { Manufacturer } from './manufacturer';
import { ManufacturerSeo } from './manufacturerSeo';

export const enum CreateManufacturerErrorMessages {
    MANUFACTURER_ALREADY_EXISTS = 'Manufacturer already exists.',
    MANUFACTURER_NOT_CREATED_SUCCESSFULLY = 'Manufacturer not created successfully'
}

export const enum CreateManufacturerSuccessMessages {
    MANUFACTURER_CREATED_SUCCESSFULLY = 'Manufacturer created successfully.'
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
    data: Manufacturer;
}

export interface CreateManufacturerErrorResponse extends ErrorResponse {
    code?: number;
    error: CreateManufacturerErrorMessages.MANUFACTURER_ALREADY_EXISTS | CreateManufacturerErrorMessages.MANUFACTURER_NOT_CREATED_SUCCESSFULLY;
    errors: DescriptiveError;
}


export type CreateManufacturerResponse = CreateManufacturerSuccessResponse | CreateManufacturerErrorResponse;