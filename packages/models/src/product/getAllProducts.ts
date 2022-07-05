
import { DescriptiveError, ErrorResponse, SuccessResponse } from "src/index";
import { Product } from "./product";

/**
 * API Path: /products
 * method: GET
 * query: GetAllProductsQuery
 * response: GetAllProductsResponse
 */

export interface GetAllProductsQuery {
    skip?: number,
    limit?: number,
}

export interface GetAllProductsSuccessResponse extends SuccessResponse {
    code: number;
    data: Product[];
}

export const enum GetAllProductsErrorMessages {
    CAN_NOT_GET_ALL_PRODUCTS = 'CAN_NOT_GET_ALL_PRODUCTS',
}

export interface GetAllProductsErrorResponse extends ErrorResponse {
    code?: number;
    error: GetAllProductsErrorMessages;
    errors: DescriptiveError;
}

export type GetAllProductsResponse = GetAllProductsSuccessResponse | GetAllProductsErrorResponse;