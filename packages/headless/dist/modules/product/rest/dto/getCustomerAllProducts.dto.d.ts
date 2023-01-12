import { GetCustomerAllProductsQuery, GetCustomerAllProductsErrorMessages, GetCustomerAllProductsErrorResponse, GetCustomerAllProductsSuccessResponse, GetCustomerAllProductsResponseType } from '@bs-commerce/models';
import { CustomerProductDto } from './customerProduct.dto';
export declare class GetCustomerAllProductsQueryDto implements GetCustomerAllProductsQuery {
    skip?: number;
    limit?: number;
    brand?: string;
    manufacturer?: string;
    categoryId?: string;
    productName?: string;
    isFeatured?: boolean;
    slug?: string;
    orderBy?: string;
    minPrice?: number;
    maxPrice?: number;
}
export declare class GetCustomerAllProductsErrorResponseDto implements GetCustomerAllProductsErrorResponse {
    code: number;
    error: GetCustomerAllProductsErrorMessages;
    errors: string[];
}
export declare class GetCustomerAllProductsResponse implements GetCustomerAllProductsResponseType {
    products: CustomerProductDto[];
    manufacturers: string[];
    brands: string[];
    totalProducts: number;
}
export declare class GetCustomerAllProductsSuccessResponseDto implements GetCustomerAllProductsSuccessResponse {
    code: number;
    data: GetCustomerAllProductsResponse;
}
