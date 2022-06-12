
import { DescriptiveError, ErrorResponse, SuccessResponse } from "src/index";
import { Product } from "./product";

/**
 * API Path: /product
 * method: GET
 * query: GetProductsByConditionQuery
 * response: GetProductsByConditionResponse
 */

export interface GetProductsByConditionQuery {
    skip?: number;
    limit?: number;
    brandId?: string;
    categoryId?: string;
    productName?: string;
    isFeatured?: boolean;
    slug?: string;
    orderBy?: string;
}

export interface GetProductsObject {
    products: Product[]
    count: number;
}

export interface GetProductsByConditionSuccessResponse extends SuccessResponse {
    code: number;
    data: GetProductsObject;
}

export const enum GetProductsByConditionErrorMessages {
    CAN_NOT_GET_PRODUCTS = 'CAN_NOT_GET_PRODUCTS',
}

export interface GetProductsByConditionErrorResponse extends ErrorResponse {
    code?: number;
    error: GetProductsByConditionErrorMessages;
    errors: DescriptiveError;
}

export type GetProductsByConditionResponse = GetProductsByConditionSuccessResponse | GetProductsByConditionErrorResponse;