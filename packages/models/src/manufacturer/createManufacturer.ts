 import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
import { Manufacturer } from 'src/index';
import { manufacturerSeo } from './manufacturerSeo';

 /**
 * API Path: /manufacturer/create
 * method: POST
 * body: createManufacturerRequest
 * response: CreateManufacturerResponse
 */

export interface createManufacturerRequest {
    name: string;
    description?: string;
    picture?: string;
    isPublished?: boolean;
    displayOrder?: number;
    seo?: manufacturerSeo
}

export interface createManufacturerSuccessResponse extends SuccessResponse {
    code: number;
    data: Manufacturer;
}

export interface createManufacturerErrorResponse extends ErrorResponse {
    code: number;
    error: string;
    errors: DescriptiveError;
}


export type CreateManufacturerResponse = createManufacturerSuccessResponse | createManufacturerErrorResponse;