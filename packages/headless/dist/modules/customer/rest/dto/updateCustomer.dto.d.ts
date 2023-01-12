import { UpdateCustomerRequestBody, UpdateCustomerErrorResponse, UpdateCustomerSuccessResponse, UpdateCustomerErrorMessages } from '@bs-commerce/models';
import { CustomerInformationDto } from './customer.dto';
export declare class UpdateCustomerDto implements UpdateCustomerRequestBody {
    name?: string;
    phone?: string;
    email?: string;
}
export declare class UpdateCustomerErrorResponseDto implements UpdateCustomerErrorResponse {
    code: number;
    error: UpdateCustomerErrorMessages;
    errors: string[];
}
export declare class UpdateCustomerSuccessResponseDto implements UpdateCustomerSuccessResponse {
    code: number;
    data: CustomerInformationDto;
}
