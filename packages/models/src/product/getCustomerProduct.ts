
import { DescriptiveError, ErrorResponse, SuccessResponse } from "src/index";
import { CustomerSingleProduct } from "./customerProduct";

/**
 * API Path: /customer/products/:productId
 * method: GET
 * query: GetCustomerProductQuery
 * response: GetCustomerProductResponse
 */

export interface GetCustomerProductParams {
    productId: string,
}

export interface GetCustomerProductSuccessResponse extends SuccessResponse {
    code: number;
    data: CustomerSingleProduct;
}

export const enum GetCustomerProductErrorMessages {
    CAN_NOT_GET_PRODUCT = 'CAN_NOT_GET_PRODUCT',
}

export interface GetCustomerProductErrorResponse extends ErrorResponse {
    code?: number;
    error: GetCustomerProductErrorMessages;
    errors: DescriptiveError;
}

export type GetCustomerProductResponse = GetCustomerProductSuccessResponse | GetCustomerProductErrorResponse;