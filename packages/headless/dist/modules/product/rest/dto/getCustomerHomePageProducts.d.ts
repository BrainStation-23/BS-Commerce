import { CustomerProductDto } from './customerProduct.dto';
import { GetCustomerAllHomePageProductsErrorMessages, GetCustomerAllHomePageProductsErrorResponse, GetCustomerAllHomePageProductsSuccessResponse } from '@bs-commerce/models';
export declare class GetCustomerAllHomePageProductsErrorResponseDto implements GetCustomerAllHomePageProductsErrorResponse {
    code: number;
    error: GetCustomerAllHomePageProductsErrorMessages;
    errors: string[];
}
export declare class GetCustomerAllHomePageProductsSuccessResponseDto implements GetCustomerAllHomePageProductsSuccessResponse {
    code: number;
    data: [CustomerProductDto];
}
