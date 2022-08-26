
import { DescriptiveError, ErrorResponse, SuccessResponse } from "src/index";
import { Product, ProductCategory, ProductInfo, ProductManufacturer, ProductMeta, ProductPhoto } from "./product";

/**
 * API Path: /product
 * method: POST
 * body: CreateProductRequest
 * response: CreateProductResponse
 */

export interface CreateProductRequest {
    info: ProductInfo;
    meta?: ProductMeta;
    tags?: string[];
    photos?: ProductPhoto[];
    brands?: string[],
    manufacturer?: ProductManufacturer,
    categories: ProductCategory[];
}

export interface CreateProductSuccessResponse extends SuccessResponse {
    code: number;
    data: Product;
}

export const enum CreateProductErrorMessages {
    PRODUCT_SKU_MATCH = 'PRODUCT_SKU_MATCH',
    PRODUCT_FRIENDLY_PAGE_NAME_MATCH = 'PRODUCT_FRIENDLY_PAGE_NAME_MATCH',
    CAN_NOT_CREATE_NEW_PRODUCT = 'CAN_NOT_CREATE_NEW_PRODUCT'
}

export interface CreateProductErrorResponse extends ErrorResponse {
    code?: number;
    error: CreateProductErrorMessages;
    errors: DescriptiveError;
}

export type CreateProductResponse = CreateProductSuccessResponse | CreateProductErrorResponse;