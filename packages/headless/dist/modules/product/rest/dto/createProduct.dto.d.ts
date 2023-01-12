import { ProductCategoryDto, ProductDto, ProductInfoDto, ProductManufacturerDto, ProductMetaDto, ProductPhotoDto } from './product.dto';
import { CreateProductRequest, CreateProductErrorResponse, CreateProductErrorMessages, CreateProductSuccessResponse } from '@bs-commerce/models';
export declare class CreateProductDto implements CreateProductRequest {
    info: ProductInfoDto;
    meta: ProductMetaDto;
    tags?: [string];
    photos?: ProductPhotoDto[];
    brands?: [string];
    manufacturer: ProductManufacturerDto;
    categories: ProductCategoryDto[];
}
export declare class CreateProductErrorResponseDto implements CreateProductErrorResponse {
    code: number;
    error: CreateProductErrorMessages;
    errors: string[];
}
export declare class CreateProductSuccessResponseDto implements CreateProductSuccessResponse {
    code: number;
    data: ProductDto;
}
