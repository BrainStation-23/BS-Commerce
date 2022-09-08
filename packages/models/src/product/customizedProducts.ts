import { DescriptiveError, ErrorResponse, SuccessResponse } from "src/index";
import { Product } from "./product";

export interface GetCustomizedProductsQuery {
    skip?: number;
    limit?: number;
    tag: string;
}

export interface GetCustomizedProductsSuccessResponse extends SuccessResponse {
    code: number;
    data: Product[];
}

export const enum GetCustomizedProductsErrorMessages {
    CAN_NOT_GET_CUSTOMIZED_PRODUCTS = 'CAN_NOT_GET_CUSTOMIZED_PRODUCTS',
    INVALID_TAG_NAME = 'INVALID_TAG_NAME',
}

export const enum GetCustomizedProductsTagsEnum {
    TOP_SELLING_PRODUCTS = 'TOP_SELLING_PRODUCTS',
    BRANDS_YOU_ARE_LOOKING_FOR = 'BRANDS_YOU_ARE_LOOKING_FOR',
    NEW_ARRIVAL = 'NEW_ARRIVAL',
    TRENDING_PRODUCTS = 'TRENDING_PRODUCTS',
    DEALS_OF_THE_WEEKS = 'DEALS_OF_THE_WEEKS',
    FEATURED_PRODUCTS = 'FEATURED_PRODUCTS',
}

export interface GetCustomizedProductsErrorResponse extends ErrorResponse {
    code?: number;
    error: GetCustomizedProductsErrorMessages;
    errors: DescriptiveError;
}

export type GetCustomizedProductsResponse = GetCustomizedProductsSuccessResponse | GetCustomizedProductsErrorResponse;