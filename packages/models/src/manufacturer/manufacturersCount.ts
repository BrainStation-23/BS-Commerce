import { DescriptiveError, ErrorResponse, SuccessResponse } from '../common/index';

export const enum GetManufacturersCountErrorMessages {
    MANUFACTURERS_NOT_FOUND = 'MANUFACTURERS_NOT_FOUND'
}

export const enum GetManufacturersCountSuccessMessages {
    MANUFACTURERS_COUNT_LOADED_SUCCESSFULLY = 'MANUFACTURERS_COUNT_LOADED_SUCCESSFULLY'
}

/**
* API Path: /manufacturers/count
* method: GET
* body: null
* response: ManufacturersCountResponse
*/

export interface GetManufacturersCountSuccessResponse extends SuccessResponse {
    code: number;
    data: {
        count: number,
        message: GetManufacturersCountSuccessMessages
    };
}

export interface GetManufacturersCountErrorResponse extends ErrorResponse {
    code?: number;
    error: GetManufacturersCountErrorMessages;
    errors: DescriptiveError;
}


export type ManufacturersCountResponse = GetManufacturersCountSuccessResponse | GetManufacturersCountErrorResponse;