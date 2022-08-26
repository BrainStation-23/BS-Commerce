
import { DescriptiveError, ErrorResponse, Product, SuccessResponse } from "src/index";

/**
 * API Path: /products/:productId
 * method: PATCH
 * body: UpdateProductRequest
 * response: UpdateProductResponse
 */

export interface UpdateProductPrams {
    productId: string
}
export interface UpdateProductInfo {
    name?: string,
    shortDescription?: string,
    fullDescription?: string,
    sku?: string,
    price?: number,
    oldPrice?: number,
    cost?: number,
    showOnHomePage?: boolean,
    includeInTopMenu?: boolean,
    allowToSelectPageSize?: boolean,
    published?: boolean,
    displayOrder?: number,
    isFeatured?: boolean,
}

export interface UpdateProductMeta {
    keywords?: string[],
    title?: string,
    description?: string,
    friendlyPageName?: string
}

export interface UpdateProductPhoto {
    url?: string,
    id?: string,
    title?: string,
    alt?: string,
    displayOrder?: number
}

export interface UpdateProductManufacturer {
    name?: string,
    id?: string,
}

export interface UpdateProductCategory {
    id?: string,
    name?: string,
}

export interface UpdateProductRequest {
    info?: UpdateProductInfo;
    meta?: UpdateProductMeta;
    tags?: string[];
    photos?: UpdateProductPhoto[];
    brands?: string[],
    manufacturer?: UpdateProductManufacturer,
    categories?: UpdateProductCategory[];
}

export interface UpdateProductParams {
    productId: string
}

export interface UpdateProductSuccessResponse extends SuccessResponse {
    code: number;
    data: Product;
}

export const enum UpdateProductErrorMessages {
    PRODUCT_SKU_MATCH = 'PRODUCT_SKU_MATCH',
    PRODUCT_FRIENDLY_PAGE_NAME_MATCH = 'PRODUCT_FRIENDLY_PAGE_NAME_MATCH',
    CAN_NOT_UPDATE_PRODUCT = 'CAN_NOT_UPDATE_PRODUCT'
}

export interface UpdateProductErrorResponse extends ErrorResponse {
    code?: number;
    error: UpdateProductErrorMessages;
    errors: DescriptiveError;
}

export type UpdateProductResponse = UpdateProductSuccessResponse | UpdateProductErrorResponse;