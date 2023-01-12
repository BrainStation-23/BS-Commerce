import { GetCustomerErrorResponse, GetCustomerQuery, GetCustomerSuccessResponse, GetCustomerErrorMessages } from '@bs-commerce/models';
import { CustomerDto } from './customer.dto';
export declare class GetCustomerQueryDto implements GetCustomerQuery {
    phone: string;
    email: string;
}
export declare class GetCustomerErrorResponseDto implements GetCustomerErrorResponse {
    code: number;
    error: GetCustomerErrorMessages;
    errors: string[];
}
export declare class GetCustomerSuccessResponseDto implements GetCustomerSuccessResponse {
    code: number;
    data: CustomerDto;
}
