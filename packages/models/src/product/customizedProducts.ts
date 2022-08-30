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
    BRANDS_YOU_ARE_LOOKING_FOR = 'BRANDS_YOU_ARE_LOOKING_FOR',
    TIMESALE_UNTIL_TODAY = 'TIMESALE_UNTIL_TODAY',
    NEW_ARRIVAL = 'NEW_ARRIVAL',
    A_LOT_OF_PEOPLE_BUY_EVERY_MONTH = 'A_LOT_OF_PEOPLE_BUY_EVERY_MONTH',
    RECENTLY_VIEWED_PRODUCTS = 'RECENTLY_VIEWED_PRODUCTS',
    TOP_SELLING_PRODUCTS = 'TOP_SELLING_PRODUCTS',
    DAILY_NECESSITIES = 'DAILY_NECESSITIES',
}

export interface GetCustomizedProductsErrorResponse extends ErrorResponse {
    code?: number;
    error: GetCustomizedProductsErrorMessages;
    errors: DescriptiveError;
}

export type GetCustomizedProductsResponse = GetCustomizedProductsSuccessResponse | GetCustomizedProductsErrorResponse;