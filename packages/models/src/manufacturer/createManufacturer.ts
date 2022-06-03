import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
import { Manufacturer } from './manufacturer';
import { ManufacturerSeo } from './manufacturerSeo';

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
    code: number;
    error: string;
    errors: DescriptiveError;
}


export type CreateManufacturerResponse = CreateManufacturerSuccessResponse | CreateManufacturerErrorResponse;