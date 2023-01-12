import { ProductDto } from './product.dto';
import { UpdateProductRequest, UpdateProductErrorResponse, UpdateProductErrorMessages, UpdateProductSuccessResponse, UpdateProductInfo, UpdateProductMeta, UpdateProductPhoto, UpdateProductCategory, UpdateProductManufacturer, UpdateProductParams } from '@bs-commerce/models';
export declare class UpdateProductParamsDto implements UpdateProductParams {
    productId: string;
}
export declare class UpdateProductInfoDto implements UpdateProductInfo {
    name?: string;
    shortDescription?: string;
    fullDescription?: string;
    sku?: string;
    price?: number;
    oldPrice?: number;
    cost?: number;
    showOnHomePage?: boolean;
    includeInTopMenu?: boolean;
    allowToSelectPageSize?: boolean;
    published?: boolean;
    displayOrder?: number;
    isFeatured?: boolean;
}
export declare class UpdateProductMetaDto implements UpdateProductMeta {
    keywords?: string[];
    title?: string;
    description?: string;
    friendlyPageName?: string;
}
export declare class UpdateProductPhotoDto implements UpdateProductPhoto {
    url?: string;
    id?: string;
    title?: string;
    alt?: string;
    displayOrder?: number;
}
export declare class UpdateProductManufacturerDto implements UpdateProductManufacturer {
    id?: string;
    name?: string;
}
export declare class UpdateProductCategoryDto implements UpdateProductCategory {
    id?: string;
    name?: string;
}
export declare class UpdateProductDto implements UpdateProductRequest {
    info?: UpdateProductInfoDto;
    meta?: UpdateProductMetaDto;
    tags?: [string];
    photos?: UpdateProductPhotoDto[];
    brands?: [string];
    manufacture?: UpdateProductManufacturerDto;
    categories?: UpdateProductCategoryDto[];
}
export declare class UpdateProductErrorResponseDto implements UpdateProductErrorResponse {
    code: number;
    error: UpdateProductErrorMessages;
    errors: string[];
}
export declare class UpdateProductSuccessResponseDto implements UpdateProductSuccessResponse {
    code: number;
    data: ProductDto;
}
