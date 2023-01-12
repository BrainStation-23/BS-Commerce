import { GetCustomerProductParams, GetCustomerProductErrorMessages, GetCustomerProductErrorResponse, GetCustomerProductSuccessResponse } from '@bs-commerce/models';
import { CustomerProductDto } from './customerProduct.dto';
export declare class GetCustomerProductParamsDto implements GetCustomerProductParams {
    productId: string;
}
export declare class GetCustomerProductErrorResponseDto implements GetCustomerProductErrorResponse {
    code: number;
    error: GetCustomerProductErrorMessages;
    errors: string[];
}
export declare class GetCustomerProductSuccessResponseDto implements GetCustomerProductSuccessResponse {
    code: number;
    data: CustomerProductDto;
}
