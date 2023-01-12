import { CustomerInformationDto } from './customer.dto';
import { GetCustomerInformationErrorResponse, GetCustomerInformationSuccessResponse, GetCustomerInformationErrorMessages } from '@bs-commerce/models';
export declare class GetCustomerInformationErrorResponseDto implements GetCustomerInformationErrorResponse {
    code: number;
    error: GetCustomerInformationErrorMessages;
    errors: string[];
}
export declare class GetCustomerInformationSuccessResponseDto implements GetCustomerInformationSuccessResponse {
    code: number;
    data: CustomerInformationDto;
}
