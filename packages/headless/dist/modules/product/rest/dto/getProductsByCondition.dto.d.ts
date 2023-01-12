import { GetProductsByConditionQuery, GetProductsByConditionErrorMessages, GetProductsByConditionErrorResponse, GetProductsByConditionSuccessResponse, ConditionalProduct } from '@bs-commerce/models';
import { ProductInfoDto, ProductPhotoDto } from './product.dto';
export declare class GetProductsByConditionQueryDto implements GetProductsByConditionQuery {
    skip?: number;
    limit?: number;
    brand?: string;
    categoryId?: string;
    productName?: string;
    isFeatured?: boolean;
    slug?: string;
    orderBy?: string;
}
export declare class GetProductsByConditionErrorResponseDto implements GetProductsByConditionErrorResponse {
    code: number;
    error: GetProductsByConditionErrorMessages;
    errors: string[];
}
export declare class ConditionalProductProductDto implements ConditionalProduct {
    info: ProductInfoDto;
    photos?: ProductPhotoDto[];
    brands?: string[];
}
export declare class GetProductsObject {
    products: ConditionalProductProductDto[];
    count: number;
}
export declare class GetProductsByConditionSuccessResponseDto implements GetProductsByConditionSuccessResponse {
    code: number;
    data: GetProductsObject;
}
