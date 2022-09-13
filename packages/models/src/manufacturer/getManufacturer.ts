import {
  DescriptiveError,
  ErrorResponse,
  SuccessResponse,
} from '../common/index';
import { Manufacturer } from './manufacturer';

export const enum GetManufacturerErrorMessages {
  MANUFACTURER_NOT_FOUND = 'MANUFACTURER_NOT_FOUND',
}

export const enum GetManufacturerSuccessMessages {
  MANUFACTURER_LOADED_SUCCESSFULLY = 'MANUFACTURER_LOADED_SUCCESSFULLY',
}

/**
 * API Path: /manufacturer/{manufacturerId}
 * method: GET
 * body: null
 * response: GetManufacturerResponse
 */

export interface GetManufacturerSuccessResponse extends SuccessResponse {
  code: number;
  data: {
    manufacturer: Manufacturer;
    message: GetManufacturerSuccessMessages;
  };
}

export interface GetManufacturerErrorResponse extends ErrorResponse {
  code?: number;
  error: GetManufacturerErrorMessages;
  errors: DescriptiveError;
}

export type GetManufacturerResponse =
  | GetManufacturerSuccessResponse
  | GetManufacturerErrorResponse;
